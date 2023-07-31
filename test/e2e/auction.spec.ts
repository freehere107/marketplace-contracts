import { after, describe } from 'mocha'
import ApiSingleton from '../shared/api_singleton'
import { setupMarketplace as setup } from '../shared/test-setups/marketplace'
import { setupArchNFT } from '../shared/test-setups/arch_nft'
import { setupPSP22 } from '../shared/test-setups/my_psp22'
import MarketplaceContract from '../../typechain-generated/contracts/marketplace'
import ArchNFTContract from '../../typechain-generated/contracts/arch_nft'
import PSP22Contract from '../../typechain-generated/contracts/my_psp22'
import { CurrencyBuilder, Id } from '../../typechain-generated/types-arguments/marketplace'
import { Signers } from '../shared/signers'
import { expect } from '../shared/chai'
import { AuctionStatus } from '../../typechain-generated/types-returns/marketplace'
import { MIN_BID_STEP, PRICE, TOKEN_ID, TOKEN_ID_1, TOKEN_ID_2, TOKEN_ID_3 } from '../shared/consts'
import { KeyringPair } from '@polkadot/keyring/types'

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function genTime(fromStart: number, duration: number) {
  const START_TIME = Date.now() + fromStart
  const END_TIME = START_TIME + duration

  return { START_TIME, END_TIME }
}

async function mintAndApprove(contract: MarketplaceContract, nft: ArchNFTContract, tokenId: Id, minter: KeyringPair) {
  await expect(nft.tx.mint(minter.address, tokenId)).to.eventually.be.fulfilled
  await expect(nft.withSigner(minter).tx.approve(contract.address, tokenId, true)).to.eventually.be.fulfilled
}

async function mintAndListAuction(
  contract: MarketplaceContract,
  nft: ArchNFTContract,
  psp22: PSP22Contract,
  tokenId: Id,
  price: number,
  minBidStep: number,
  isNative: boolean = false,
  duration: number = 5000,
  fromStart: number = 3000,
) {
  const bob = Signers.Bob

  await mintAndApprove(contract, nft, tokenId, bob)

  const { START_TIME, END_TIME } = genTime(fromStart, duration)

  const indexBefore = (await contract.query.getAuctionCount()).value.unwrapRecursively().toNumber()

  if (!isNative) {
    await expect(
      contract
        .withSigner(bob)
        .tx.listNftForAuction(
          bob.address,
          nft.address,
          tokenId,
          price,
          minBidStep,
          CurrencyBuilder.Custom(psp22.address),
          START_TIME,
          END_TIME,
        ),
    ).to.eventually.be.fulfilled
  } else {
    await expect(
      contract
        .withSigner(bob)
        .tx.listNftForAuction(
          bob.address,
          nft.address,
          tokenId,
          price,
          minBidStep,
          CurrencyBuilder.Native(),
          START_TIME,
          END_TIME,
        ),
    ).to.eventually.be.fulfilled
  }

  await expect(contract.query.getAuctionByIndex(indexBefore)).to.be.deepReturnValue({
    id: indexBefore,
    creator: Signers.Bob.address,
    collection: nft.address,
    tokenId: tokenId,
    startPrice: price,
    minBidStep: minBidStep,
    currency: CurrencyBuilder.Custom(psp22.address),
    startTime: START_TIME,
    endTime: END_TIME,
    currentPrice: 0,
    currentBidder: null,
    status: AuctionStatus.waitingAuction,
  })

  await expect(contract.query.getAuctionCount()).to.have.returnNumber(indexBefore + 1)

  return { START_TIME, END_TIME }
}

describe('Auction', () => {
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
      let { START_TIME, END_TIME } = await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)
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

    it('should list an NFT for auction under normal circumstances', async () => {
      await expect(mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)).to.eventually.be.fulfilled
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

    it('should start an auction under normal circumstances', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      let auction = (await contract.query.getAuctionByIndex(0)).value.unwrapRecursively()

      expect(auction?.status).to.equal(AuctionStatus.inAuction)
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

    it('should cancel an auction under normal circumstances', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1)

      await expect(contract.withSigner(Signers.Bob).tx.cancelAuction(0)).to.eventually.be.fulfilled
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

    it(`can't bid twice with the low bid step`, async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 5, false, 100000000, 1000)

      await sleep(1000)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      await expect(psp22.withSigner(Signers.Alice).tx.approve(contract.address, 101)).to.eventually.be.fulfilled
      await expect(contract.withSigner(Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled

      await expect(psp22.withSigner(Signers.Charlie).tx.approve(contract.address, 102)).to.eventually.be.fulfilled
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

    it('should claim an NFT from an auction under normal circumstances', async () => {
      await mintAndListAuction(contract, nft, psp22, TOKEN_ID_1, 100, 1, false, 100, 100)

      await sleep(100)

      await expect(contract.withSigner(Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled

      await psp22.withSigner(Signers.Alice).tx.approve(contract.address, 101)
      await expect(contract.withSigner(Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled

      await sleep(300)

      // push block
      await psp22.withSigner(Signers.Bob).tx.approve(contract.address, 100001)

      await expect(contract.withSigner(Signers.Alice).tx.claimNft(0)).to.eventually.be.fulfilled

      await expect(nft.withSigner(Signers.Alice).query.ownerOf(TOKEN_ID_1)).to.have.returnValue(Signers.Alice.address)

      let auction = (await contract.query.getAuctionByIndex(0)).value.unwrapRecursively()!

      expect(auction.status).to.deep.equal(AuctionStatus.ended)
    })
  })
})
