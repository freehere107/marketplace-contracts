import { after, describe } from 'mocha'
import { expect } from '../shared/chai'
import ApiSingleton from '../shared/api_singleton'
import { setupMarketplace as setup } from '../shared/test-setups/marketplace'
import { setupArchNFT } from '../shared/test-setups/arch_nft'
import { INITIAL_BALANCE, setupPSP22 } from '../shared/test-setups/my_psp22'
import { Signers } from '../shared/signers'
import { CurrencyBuilder, Id, IdBuilder } from '../../typechain-generated/types-arguments/marketplace'
import { ListingStatus } from '../../typechain-generated/types-returns/marketplace'
import MarketplaceContract from '../../typechain-generated/contracts/marketplace'
import ArchNFTContract from '../../typechain-generated/contracts/arch_nft'
import PSP22Contract from '../../typechain-generated/contracts/my_psp22'
import BN from 'bn.js'
import { KeyringPair } from '@polkadot/keyring/types'
import { PRICE, PRICE_WITH_FEE, TOKEN_ID, TOKEN_ID_1, TOKEN_ID_2, TOKEN_ID_3 } from '../shared/consts'

async function mintAndList(
  contract: MarketplaceContract,
  nft: ArchNFTContract,
  psp22: PSP22Contract,
  tokenId: Id,
  price: number,
  isNative: boolean = false,
) {
  const bob = Signers.Bob

  await expect(nft.tx.mint(bob.address, tokenId)).to.eventually.be.fulfilled

  await expect(nft.withSigner(bob).tx.approve(contract.address, tokenId, true)).to.eventually.be.fulfilled

  if (!isNative) {
    await expect(
      contract
        .withSigner(bob)
        .tx.listNftForSale(bob.address, nft.address, tokenId, price, CurrencyBuilder.Custom(psp22.address)),
    ).to.eventually.be.fulfilled
  } else {
    await expect(
      contract.withSigner(bob).tx.listNftForSale(bob.address, nft.address, tokenId, price, CurrencyBuilder.Native()),
    ).to.eventually.be.fulfilled
  }
}

async function getBalance(signer: KeyringPair) {
  const api = await ApiSingleton.getInstance()

  // @ts-ignore
  const { data: balance } = await api.query.system.account(signer.address)

  return balance.free
}

describe('Marketplace', () => {
  it('Upon initialization, the listing count should be zero.', async () => {
    const contract = await setup()

    await expect(contract.query.getListingCount()).to.have.returnNumber(0)
  })

  it('Get listing by index when there are no listings should return None', async () => {
    const contract = await setup()

    await expect(contract.query.getListingByIndex(0)).to.returnValue(null)
  })

  it('Cancel a listing.', async () => {
    const contract = await setup()

    const nft = await setupArchNFT()
    const psp22 = await setupPSP22()

    const bob = Signers.Bob

    await expect(contract.query.getListingCount()).to.have.returnNumber(0)

    await expect(mintAndList(contract, nft, psp22, TOKEN_ID, PRICE)).to.eventually.be.fulfilled

    await expect(contract.query.getListingCount()).to.have.returnNumber(1)

    await expect(contract.withSigner(bob).tx.cancelListing(0)).to.eventually.be.fulfilled

    await expect(contract.query.getListingCount()).to.have.returnNumber(1)

    await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
      id: 0,
      creator: bob.address,
      collection: nft.address,
      tokenId: TOKEN_ID,
      price: PRICE,
      currency: CurrencyBuilder.Custom(psp22.address),
      status: ListingStatus.cancelled,
    })
  })

  it("Try to cancel a listing that doesn't exist.", async () => {
    const contract = await setup()

    const bob = Signers.Bob

    await expect(contract.query.getListingCount()).to.have.returnNumber(0)

    await expect(contract.withSigner(bob).tx.cancelListing(0)).to.eventually.be.rejected

    await expect(contract.query.getListingCount()).to.have.returnNumber(0)
  })

  describe('PSP22 Currency', () => {
    it('List a new NFT for sale', async () => {
      const contract = await setup()
      const nft = await setupArchNFT()
      const psp22 = await setupPSP22()

      await expect(contract.query.getListingCount()).to.have.returnNumber(0)

      await expect(mintAndList(contract, nft, psp22, TOKEN_ID, PRICE)).to.eventually.be.fulfilled

      await expect(contract.query.getListingCount()).to.have.returnNumber(1)
      await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
        id: 0,
        creator: Signers.Bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID,
        price: PRICE,
        currency: CurrencyBuilder.Custom(psp22.address),
        status: ListingStatus.onSale,
      })
    })

    it('Buy an NFT from a listing.', async () => {
      const contract = await setup()
      const nft = await setupArchNFT()
      const psp22 = await setupPSP22()

      const defaultSigner = Signers.defaultSigner
      const bob = Signers.Bob

      await expect(contract.query.getListingCount()).to.have.returnNumber(0)

      await expect(mintAndList(contract, nft, psp22, TOKEN_ID, PRICE)).to.eventually.be.fulfilled

      await expect(contract.query.getListingCount()).to.have.returnNumber(1)
      await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
        id: 0,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID,
        price: PRICE,
        currency: CurrencyBuilder.Custom(psp22.address),
        status: ListingStatus.onSale,
      })

      await expect(psp22.withSigner(Signers.Alice).tx.approve(contract.address, PRICE_WITH_FEE)).to.eventually.be
        .fulfilled

      await expect(contract.withSigner(Signers.Alice).tx.buyNft(0)).to.eventually.be.fulfilled

      await expect(contract.query.getListingCount()).to.have.returnNumber(1)

      await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
        id: 0,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID,
        price: PRICE,
        currency: CurrencyBuilder.Custom(psp22.address),
        status: ListingStatus.sold,
      })

      await expect(nft.query.ownerOf(TOKEN_ID)).to.have.returnValue(Signers.Alice.address)

      await expect(psp22.query.balanceOf(Signers.Alice.address)).to.have.returnNumber(INITIAL_BALANCE - PRICE_WITH_FEE)
      await expect(psp22.query.balanceOf(bob.address)).to.have.returnNumber(INITIAL_BALANCE + PRICE)
      await expect(psp22.query.balanceOf(defaultSigner.address)).to.have.returnNumber(
        INITIAL_BALANCE + PRICE_WITH_FEE - PRICE,
      )
    })

    it('Buy multiple NFTs from different listings.', async () => {
      const contract = await setup()

      const nft = await setupArchNFT()
      const psp22 = await setupPSP22()

      const defaultSigner = Signers.defaultSigner
      const bob = Signers.Bob
      const alice = Signers.Alice

      const TOKEN_ID_1 = IdBuilder.U8(1)
      const TOKEN_ID_2 = IdBuilder.U8(2)
      const TOKEN_ID_3 = IdBuilder.U8(3)

      await expect(contract.query.getListingCount()).to.have.returnNumber(0)

      await expect(mintAndList(contract, nft, psp22, TOKEN_ID_1, PRICE)).to.eventually.be.fulfilled
      await expect(mintAndList(contract, nft, psp22, TOKEN_ID_2, PRICE)).to.eventually.be.fulfilled
      await expect(mintAndList(contract, nft, psp22, TOKEN_ID_3, PRICE)).to.eventually.be.fulfilled

      await expect(contract.query.getListingCount()).to.have.returnNumber(3)

      await expect(psp22.withSigner(alice).tx.approve(contract.address, 3 * PRICE_WITH_FEE)).to.eventually.be.fulfilled

      await expect(contract.withSigner(alice).tx.buyBatch([0, 1, 2])).to.eventually.be.fulfilled

      await expect(contract.query.getListingCount()).to.have.returnNumber(3)

      await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
        id: 0,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID_1,
        price: PRICE,
        currency: CurrencyBuilder.Custom(psp22.address),
        status: ListingStatus.sold,
      })

      await expect(contract.query.getListingByIndex(1)).to.have.deepReturnValue({
        id: 1,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID_2,
        price: PRICE,
        currency: CurrencyBuilder.Custom(psp22.address),
        status: ListingStatus.sold,
      })

      await expect(contract.query.getListingByIndex(2)).to.have.deepReturnValue({
        id: 2,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID_3,
        price: PRICE,
        currency: CurrencyBuilder.Custom(psp22.address),
        status: ListingStatus.sold,
      })

      await expect(nft.query.ownerOf(TOKEN_ID_1)).to.have.returnValue(alice.address)
      await expect(nft.query.ownerOf(TOKEN_ID_2)).to.have.returnValue(alice.address)
      await expect(nft.query.ownerOf(TOKEN_ID_3)).to.have.returnValue(alice.address)

      await expect(psp22.query.balanceOf(alice.address)).to.have.returnNumber(INITIAL_BALANCE - 3 * PRICE_WITH_FEE)
      await expect(psp22.query.balanceOf(bob.address)).to.have.returnNumber(INITIAL_BALANCE + 3 * PRICE)
      await expect(psp22.query.balanceOf(defaultSigner.address)).to.have.returnNumber(
        INITIAL_BALANCE + 3 * (PRICE_WITH_FEE - PRICE),
      )
    })

    it('Try to buy multiple NFTs where some or all ids are not valid.', async () => {
      const contract = await setup()

      const nft = await setupArchNFT()
      const psp22 = await setupPSP22()

      const bob = Signers.Bob
      const alice = Signers.Alice

      await expect(contract.query.getListingCount()).to.have.returnNumber(0)

      await expect(mintAndList(contract, nft, psp22, TOKEN_ID_1, PRICE)).to.eventually.be.fulfilled
      await expect(mintAndList(contract, nft, psp22, TOKEN_ID_2, PRICE)).to.eventually.be.fulfilled
      await expect(mintAndList(contract, nft, psp22, TOKEN_ID_3, PRICE)).to.eventually.be.fulfilled

      await expect(contract.query.getListingCount()).to.have.returnNumber(3)

      await expect(psp22.withSigner(alice).tx.approve(contract.address, 3 * PRICE_WITH_FEE)).to.eventually.be.fulfilled

      await expect(contract.withSigner(alice).tx.buyBatch([0, 1, 4])).to.eventually.be.rejected

      await expect(contract.query.getListingCount()).to.have.returnNumber(3)

      await expect(contract.query.getListingByIndex(2)).to.have.deepReturnValue({
        id: 2,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID_3,
        price: PRICE,
        currency: CurrencyBuilder.Custom(psp22.address),
        status: ListingStatus.onSale,
      })
    })
  })

  describe('Native currency', () => {
    it('List a new NFT for sale', async () => {
      const contract = await setup()
      const nft = await setupArchNFT()
      const psp22 = await setupPSP22()

      await expect(contract.query.getListingCount()).to.have.returnNumber(0)

      await expect(mintAndList(contract, nft, psp22, TOKEN_ID, PRICE, true)).to.eventually.be.fulfilled

      await expect(contract.query.getListingCount()).to.have.returnNumber(1)
      await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
        id: 0,
        creator: Signers.Bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID,
        price: PRICE,
        currency: CurrencyBuilder.Native(),
        status: ListingStatus.onSale,
      })
    })

    it('Buy an NFT from a listing.', async () => {
      const contract = await setup()
      const nft = await setupArchNFT()
      const psp22 = await setupPSP22()

      const defaultSigner = Signers.defaultSigner
      const bob = Signers.Bob

      await expect(contract.query.getListingCount()).to.have.returnNumber(0)

      await expect(mintAndList(contract, nft, psp22, TOKEN_ID, PRICE, true)).to.eventually.be.fulfilled

      let balanceBeforeCreator = await getBalance(defaultSigner)
      let balanceBeforeBob = await getBalance(bob)

      await expect(contract.query.getListingCount()).to.have.returnNumber(1)
      await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
        id: 0,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID,
        price: PRICE,
        currency: CurrencyBuilder.Native(),
        status: ListingStatus.onSale,
      })

      await expect(contract.withSigner(Signers.Alice).tx.buyNft(0, { value: PRICE_WITH_FEE })).to.eventually.be
        .fulfilled

      await expect(contract.query.getListingCount()).to.have.returnNumber(1)

      await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
        id: 0,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID,
        price: PRICE,
        currency: CurrencyBuilder.Native(),
        status: ListingStatus.sold,
      })

      await expect(nft.query.ownerOf(TOKEN_ID)).to.have.returnValue(Signers.Alice.address)

      let balanceAfterCreator = await getBalance(defaultSigner)
      // let balanceAfterAlice = await getBalance(alice);
      let balanceAfterBob = await getBalance(bob)

      const PRICE_WITH_FEE_BN = new BN(PRICE_WITH_FEE)
      const PRICE_BN = new BN(PRICE)

      expect(balanceAfterCreator.toString()).to.be.equal(
        balanceBeforeCreator.add(PRICE_WITH_FEE_BN).sub(PRICE_BN).toString(),
      )
      // Gas fee is not deterministic (Alice)
      expect(balanceAfterBob.toString()).to.be.equal(balanceBeforeBob.add(PRICE_BN).toString())
    })

    it('Buy an NFT from a listing with a lower price than the listing.', async () => {
      const contract = await setup()
      const nft = await setupArchNFT()
      const psp22 = await setupPSP22()

      const defaultSigner = Signers.defaultSigner
      const bob = Signers.Bob

      await expect(contract.query.getListingCount()).to.have.returnNumber(0)

      await expect(mintAndList(contract, nft, psp22, TOKEN_ID, PRICE, true)).to.eventually.be.fulfilled

      let balanceBeforeCreator = await getBalance(defaultSigner)
      let balanceBeforeBob = await getBalance(bob)

      await expect(contract.query.getListingCount()).to.have.returnNumber(1)
      await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
        id: 0,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID,
        price: PRICE,
        currency: CurrencyBuilder.Native(),
        status: ListingStatus.onSale,
      })

      await expect(contract.withSigner(Signers.Alice).tx.buyNft(0, { value: PRICE - 1 })).to.eventually.be.rejected

      await expect(contract.query.getListingCount()).to.have.returnNumber(1)

      await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
        id: 0,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID,
        price: PRICE,
        currency: CurrencyBuilder.Native(),
        status: ListingStatus.onSale,
      })

      await expect(nft.query.ownerOf(TOKEN_ID)).to.have.returnValue(contract.address)

      let balanceAfterCreator = await getBalance(defaultSigner)
      let balanceAfterBob = await getBalance(bob)

      expect(balanceAfterCreator.toString()).to.be.equal(balanceBeforeCreator.toString())
      expect(balanceAfterBob.toString()).to.be.equal(balanceBeforeBob.toString())
    })

    it('Buy batch of NFTs from a listing.', async () => {
      const contract = await setup()
      const nft = await setupArchNFT()
      const psp22 = await setupPSP22()

      const defaultSigner = Signers.defaultSigner
      const bob = Signers.Bob

      await expect(contract.query.getListingCount()).to.have.returnNumber(0)

      await expect(mintAndList(contract, nft, psp22, TOKEN_ID, PRICE, true)).to.eventually.be.fulfilled
      await expect(mintAndList(contract, nft, psp22, TOKEN_ID_2, PRICE, true)).to.eventually.be.fulfilled

      let balanceBeforeCreator = await getBalance(defaultSigner)
      let balanceBeforeBob = await getBalance(bob)

      await expect(contract.query.getListingCount()).to.have.returnNumber(2)
      await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
        id: 0,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID,
        price: PRICE,
        currency: CurrencyBuilder.Native(),
        status: ListingStatus.onSale,
      })
      await expect(contract.query.getListingByIndex(1)).to.have.deepReturnValue({
        id: 1,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID_2,
        price: PRICE,
        currency: CurrencyBuilder.Native(),
        status: ListingStatus.onSale,
      })

      await expect(contract.withSigner(Signers.Alice).tx.buyBatch([0, 1], { value: PRICE_WITH_FEE * 2 })).to.eventually
        .be.fulfilled

      await expect(contract.query.getListingCount()).to.have.returnNumber(2)

      await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
        id: 0,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID,
        price: PRICE,
        currency: CurrencyBuilder.Native(),
        status: ListingStatus.sold,
      })
      await expect(contract.query.getListingByIndex(1)).to.have.deepReturnValue({
        id: 1,
        creator: bob.address,
        collection: nft.address,
        tokenId: TOKEN_ID_2,
        price: PRICE,
        currency: CurrencyBuilder.Native(),
        status: ListingStatus.sold,
      })

      await expect(nft.query.ownerOf(TOKEN_ID)).to.have.returnValue(Signers.Alice.address)
      await expect(nft.query.ownerOf(TOKEN_ID_2)).to.have.returnValue(Signers.Alice.address)

      let balanceAfterCreator = await getBalance(defaultSigner)
      let balanceAfterBob = await getBalance(bob)

      const PRICE_WITH_FEE_BN = new BN(PRICE_WITH_FEE)
      const PRICE_BN = new BN(PRICE)

      expect(balanceAfterCreator.toString()).to.be.equal(
        balanceBeforeCreator
          .add(PRICE_WITH_FEE_BN.mul(new BN(2)))
          .sub(PRICE_BN.mul(new BN(2)))
          .toString(),
      )
      // Gas fee is not deterministic (Alice)
      expect(balanceAfterBob.toString()).to.be.equal(balanceBeforeBob.add(PRICE_BN.mul(new BN(2))).toString())
    })
  })

  it('Cannot buy an cancelled NFT from a listing.', async () => {
    const contract = await setup()
    const nft = await setupArchNFT()
    const psp22 = await setupPSP22()

    const bob = Signers.Bob

    await expect(mintAndList(contract, nft, psp22, TOKEN_ID, PRICE, true)).to.eventually.be.fulfilled
    await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
      id: 0,
      creator: bob.address,
      collection: nft.address,
      tokenId: TOKEN_ID,
      price: PRICE,
      currency: CurrencyBuilder.Native(),
      status: ListingStatus.onSale,
    })
    await expect(contract.withSigner(Signers.Bob).tx.cancelListing(0)).to.eventually.be.fulfilled
    await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
      id: 0,
      creator: bob.address,
      collection: nft.address,
      tokenId: TOKEN_ID,
      price: PRICE,
      currency: CurrencyBuilder.Native(),
      status: ListingStatus.cancelled,
    })
    await expect(contract.withSigner(Signers.Alice).tx.buyNft(0, { value: PRICE })).to.eventually.be.rejected
    await expect(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
      id: 0,
      creator: bob.address,
      collection: nft.address,
      tokenId: TOKEN_ID,
      price: PRICE,
      currency: CurrencyBuilder.Native(),
      status: ListingStatus.cancelled,
    })

    await expect(nft.query.ownerOf(TOKEN_ID)).to.have.returnValue(bob.address)
  })

  after(async () => {
    await ApiSingleton.disconnect()
  })
})
