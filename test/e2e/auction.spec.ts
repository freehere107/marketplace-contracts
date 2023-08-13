// SPDX-License-Identifier: MIT
import { after, describe } from 'mocha'

import ArchNFTContract from '../../typechain-generated/contracts/arch_nft'
import MarketplaceContract from '../../typechain-generated/contracts/marketplace'
import PSP22Contract from '../../typechain-generated/contracts/my_psp22'
import { CurrencyBuilder } from '../../typechain-generated/types-arguments/marketplace'
import { AuctionStatus } from '../../typechain-generated/types-returns/marketplace'
import ApiSingleton from '../shared/api_singleton'
import { expect } from '../shared/chai'
import {E2E_PREFIX, PRICE_WITH_FEE, TOKEN_ID, TOKEN_ID_1, TOKEN_ID_2, TOKEN_ID_3} from '../shared/consts'
import {mintAndListAuction} from "../shared/marketplace";
import { Signers } from '../shared/signers'
import { setupArchNFT } from '../shared/test-setups/arch_nft'
import { setupMarketplace as setup } from '../shared/test-setups/marketplace'
import { setupPSP22 } from '../shared/test-setups/my_psp22'
import {sleep} from "../shared/time";

describe(E2E_PREFIX + 'Auction', () => {
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

  it('Can create auction', async () => {
    const contract = await setup()
    const nft = await setupArchNFT()
    const psp22 = await setupPSP22()

    await expect(contract.query.getAuctionCount()).to.have.returnNumber(0)

    await mintAndListAuction(contract, nft, psp22, TOKEN_ID, 100, 1)
  })

  describe('Get Auction Count', () => {
    it('should return 0 when no auctions exist', async () => {
      await expect(contract.query.getAuctionCount()).to.have.returnNumber(0)
    })

    it('should correctly count the number of auctions', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)
      await expect(contract.query.getAuctionCount()).to.have.returnNumber(1)
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_2, 100, 1)
      await expect(contract.query.getAuctionCount()).to.have.returnNumber(2)
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_3, 100, 1)
      await expect(contract.query.getAuctionCount()).to.have.returnNumber(3)
    })
  })

  describe('Get Auction by Index', () => {
    it('should return None when no auctions exist', async () => {
      await expect(contract.query.getAuctionByIndex(0)).to.be.returnValue(null)
    })

    it('should return None when index is out of range', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)
      await expect(contract.query.getAuctionByIndex(1)).to.be.returnValue(null)
    })

    it('should return an auction when given a valid index', async () => {
      const { START_TIME, END_TIME } = await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)
      await expect(contract.query.getAuctionByIndex(0)).to.be.deepReturnValue({
        id: 0,
        creator: Signers.Bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID_1,
        startPrice: 100,
        minBidStep: 1,
        currency: CurrencyBuilder.Custom(psp22.address),
        startTime: START_TIME,
        endTime: END_TIME,
        currentPrice: 0,
        currentBidder: null,
        status: AuctionStatus.waitingAuction,
      })
    })
  })

  describe('List NFT for Auction', () => {
    it('should list an NFT for auction under normal circumstances', async () => {
      await expect(mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)).to.eventually.be.fulfilled
    })
  })

  describe('Start Auction', () => {
    it('should start an auction under normal circumstances', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      const auction = (await contract.query.getAuctionByIndex(0)).value.unwrapRecursively()

      expect(auction?.status).to.equal(AuctionStatus.inAuction)
    })
  })

  describe('Cancel Auction', () => {
    it('should cancel an auction under normal circumstances', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Bob).tx.cancelAuction(0)).to.eventually.be.fulfilled
    })
  })

  describe('Bid NFT', () => {
    it('should bid on an auction under normal circumstances', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1, false, 100000000, 1000)

      await sleep(1000)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      await expect(psp22.withSigner(Signers.Alice).tx.approve(contract.address, 101)).to.eventually.be.fulfilled

      await expect(contract.withSigner(Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled
    })

    it('should bid twice', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1, false, 100000000, 1000)

      await sleep(1000)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      await expect(psp22.withSigner(Signers.Alice).tx.approve(contract.address, 101)).to.eventually.be.fulfilled
      await expect(contract.withSigner(Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled

      await expect(psp22.withSigner(Signers.Charlie).tx.approve(contract.address, 103)).to.eventually.be.fulfilled
      await expect(contract.withSigner(Signers.Charlie).tx.bidNft(0, 101)).to.eventually.be.fulfilled
    })
  })

  describe('Claim NFT', () => {
    it('should claim an NFT from an auction under normal circumstances', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1, false, 300, 100)

      await sleep(100)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      await psp22.withSigner(Signers.Alice).tx.approve(contract.address, 200)
      await expect(contract.withSigner(Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled

      for (let i = 0; i < 10; i++) {
        await sleep(300);

        await psp22.withSigner(Signers.Bob).tx.approve(contract.address, 3 * PRICE_WITH_FEE);

        await sleep(300);
      }

      await expect(contract.withSigner(Signers.Alice).tx.claimNft(0)).to.eventually.be.fulfilled

      await expect(nft.withSigner(Signers.Alice).query.ownerOf(TOKEN_ID_1)).to.have.returnValue(Signers.Alice.address)

      const auction = (await contract.query.getAuctionByIndex(0)).value.unwrapRecursively()!

      expect(auction.status).to.deep.equal(AuctionStatus.ended)
    })
  })
})
