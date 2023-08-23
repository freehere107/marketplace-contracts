// SPDX-License-Identifier: MIT
import { after, describe } from 'mocha'

import ArchNFTContract from '../../typechain-generated/contracts/arch_nft'
import MarketplaceContract from '../../typechain-generated/contracts/marketplace'
import PSP22Contract from '../../typechain-generated/contracts/my_psp22'
import { CurrencyBuilder } from '../../typechain-generated/types-arguments/marketplace'
import {AuctionStatus} from "../../typechain-generated/types-returns/marketplace";
import ApiSingleton from '../shared/api_singleton'
import { expect } from '../shared/chai'
import {MIN_BID_STEP, PRICE, PRICE_WITH_FEE, SECURITY_PREFIX, TOKEN_ID_1} from '../shared/consts'
import {genTime, mintAndApprove, mintAndListAuction} from "../shared/marketplace";
import { Signers } from '../shared/signers'
import { setupArchNFT } from '../shared/test-setups/arch_nft'
import { setupMarketplace as setup } from '../shared/test-setups/marketplace'
import { setupPSP22 } from '../shared/test-setups/my_psp22'
import {sleep} from "../shared/time";

describe(SECURITY_PREFIX + 'Auction', () => {
  let contract: MarketplaceContract
  let nft: ArchNFTContract
  let psp22: PSP22Contract

  beforeEach(async () => {
    contract = await setup()
    nft = await setupArchNFT()
    psp22 = await setupPSP22()
  })

  after(async () => {
    await ApiSingleton.disconnect()
  })

  describe('Get Auction by Index', () => {
    it('should return None when index is out of range', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)
      await expect(contract.query.getAuctionByIndex(1)).to.be.returnValue(null)
    })
  })

  describe('List NFT for Auction', () => {
    it('should return an error when the caller is not the NFT owner', async () => {
      const bob = Signers.Bob

      await mintAndApprove(contract, nft, TOKEN_ID_1, bob)

      const { START_TIME, END_TIME } = genTime(1000, 5000)

      await expect(
        contract
          .withSigner(bob)
          .tx.listNftForAuction(
            Signers.Alice.address,
            nft.address,
            TOKEN_ID_1,
            PRICE,
            MIN_BID_STEP,
            CurrencyBuilder.Native(),
            START_TIME,
            END_TIME,
          ),
      ).to.eventually.be.rejected
    })

    it('should return an error if auction price is zero', async () => {
      await expect(mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 0, 1)).to.eventually.be.rejected
    })

    it('should return an error if the min bid step is zero', async () => {
      await expect(mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 0)).to.eventually.be.rejected
    })

    it('should return an error if the end time is before the start time', async () => {
      await expect(mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1, false, -5000, 5000)).to.eventually.be
        .rejected
    })
  })

  describe('Start Auction', () => {
    it('should return an error when the auction was not found', async () => {
      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.rejected
    })

    it('should return an error if the auction is not in the waiting state', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Bob).tx.cancelAuction(0)).to.eventually.be.fulfilled

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.rejected
    })

    it('should return an error if the caller is not the auction creator', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Alice).tx.startAuction(0)).to.eventually.be.rejected
    })
  })

  describe('Cancel Auction', () => {
    it('should return an error when the auction was not found', async () => {
      await expect(contract.withSigner(Signers.Bob).tx.cancelAuction(0)).to.eventually.be.rejected
    })

    it('should return an error if the auction is not in the waiting state', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      await expect(contract.withSigner(Signers.Bob).tx.cancelAuction(0)).to.eventually.be.rejected
    })

    it('should return an error if the caller is not the auction creator', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Alice).tx.cancelAuction(0)).to.eventually.be.rejected
    })
  })

  describe('Bid NFT', () => {
    it('should return an error when the auction was not found', async () => {
      await expect(contract.withSigner(Signers.Bob).tx.bidNft(0, 100)).to.eventually.be.rejected
    })

    it('should return an error if the auction is not in the auction state', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Bob).tx.bidNft(0, 100)).to.eventually.be.rejected
    })

    it('should return an error if the bid price is too low', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      await expect(contract.withSigner(Signers.Alice).tx.bidNft(0, 99)).to.eventually.be.rejected
    })

    it('should return an error if the caller is the auction creator', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      await expect(contract.withSigner(Signers.Bob).tx.bidNft(0, 100)).to.eventually.be.rejected
    })

    it(`can't bid twice with the low bid step`, async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 5, false, 100000000, 1000)

      await sleep(1000)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      await expect(psp22.withSigner(Signers.Alice).tx.approve(contract.address, 101)).to.eventually.be.fulfilled
      await expect(contract.withSigner(Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled

      await expect(psp22.withSigner(Signers.Charlie).tx.approve(contract.address, 102)).to.eventually.be.fulfilled
      await expect(contract.withSigner(Signers.Charlie).tx.bidNft(0, 101)).to.eventually.be.rejected
    })

    it(`can't bid if auction is ended`, async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1, false, 300, 100)

      await sleep(100)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      await psp22.withSigner(Signers.Alice).tx.approve(contract.address, 101)
      await expect(contract.withSigner(Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled

      // push block
      for (let i = 0; i < 10; i++) {
        await sleep(300);

        await psp22.withSigner(Signers.Bob).tx.approve(contract.address, 3 * PRICE_WITH_FEE);

        await sleep(300);
      }

      await expect(contract.withSigner(Signers.Alice).tx.claimNft(0)).to.eventually.be.fulfilled

      await expect(nft.withSigner(Signers.Alice).query.ownerOf(TOKEN_ID_1)).to.have.returnValue(Signers.Alice.address)

      const auction = (await contract.query.getAuctionByIndex(0)).value.unwrapRecursively()!

      expect(auction.status).to.deep.equal(AuctionStatus.ended)

      await expect(contract.withSigner(Signers.Charlie).tx.bidNft(0, 101)).to.eventually.be.rejected
    })
  })

  describe('Claim NFT', () => {
    it('should return an error when the auction was not found', async () => {
      await expect(contract.withSigner(Signers.Bob).tx.claimNft(0)).to.eventually.be.rejected
    })

    it('should return an error if the auction is not in the auction state', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Bob).tx.claimNft(0)).to.eventually.be.rejected
    })

    it('should return an error if the auction has not ended', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1, false, 100000000, 100)
      await sleep(100)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      await expect(contract.withSigner(Signers.Alice).tx.claimNft(0)).to.eventually.be.rejected
    })
  })
})
