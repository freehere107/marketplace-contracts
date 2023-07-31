import { after, describe } from 'mocha'
import { expect } from '../shared/chai'
import { IdBuilder } from '../../typechain-generated/types-arguments/arch_nft'
import ApiSingleton from '../shared/api_singleton'
import { Signers } from '../shared/signers'
import { setupArchNFT as setup } from '../shared/test-setups/arch_nft'
import { ADDITIONAL_INFO, COLLECTION_NAME, COLLECTION_URI } from '../shared/test-setups/creator'

describe('Arch NFT', () => {
  it('Metadata works', async () => {
    const contract = await setup()

    await expect(contract.query.collectionRoyalty()).to.have.returnValue(100)
    await expect(contract.query.collectionName()).to.have.returnValue(COLLECTION_NAME)
    await expect(contract.query.collectionUri()).to.have.returnValue(COLLECTION_URI)
    await expect(contract.query.collectionAdditionalInfo()).to.have.returnValue(ADDITIONAL_INFO)
  })

  it('Can mint NFT', async () => {
    const contract = await setup()

    await contract.tx.mint(Signers.Alice.address, IdBuilder.U8(1))

    await expect(contract.query.ownerOf(IdBuilder.U8(1))).to.have.returnValue(Signers.Alice.address)
  })

  it('Can transfer NFT', async () => {
    const contract = await setup()

    const alice = Signers.Alice
    const bob = Signers.Bob

    await contract.tx.mint(alice.address, IdBuilder.U8(1))
    await contract.withSigner(alice).tx.transfer(bob.address, IdBuilder.U8(1), [])

    await expect(contract.query.ownerOf(IdBuilder.U8(1))).to.have.returnValue(bob.address)
  })

  it('Can burn NFT', async () => {
    const contract = await setup()

    const alice = Signers.Alice

    await contract.tx.mint(alice.address, IdBuilder.U8(1))
    await contract.tx.burn(alice.address, IdBuilder.U8(1))

    await expect(contract.query.ownerOf(IdBuilder.U8(1))).to.have.returnValue(null)
  })

  it('Can set collection name', async () => {
    const contract = await setup()

    await contract.tx.setCollectionName('New name')

    await expect(contract.query.collectionName()).to.have.returnValue('New name')
  })

  it('Can set collection uri', async () => {
    const contract = await setup()

    await contract.tx.setCollectionUri('New uri')

    await expect(contract.query.collectionUri()).to.have.returnValue('New uri')
  })

  it('Can set collection additional info', async () => {
    const contract = await setup()

    await contract.tx.setCollectionAdditionalInfo('New info')

    await expect(contract.query.collectionAdditionalInfo()).to.have.returnValue('New info')
  })

  it('Cannot mint NFT if not owner', async () => {
    const contract = await setup()

    const bob = Signers.Bob

    await expect(contract.withSigner(bob).tx.mint(bob.address, IdBuilder.U8(1))).to.eventually.be.rejected
  })

  it('Cannot transfer NFT if not owner', async () => {
    const contract = await setup()

    const { Alice: alice, Bob: bob } = Signers

    await contract.tx.mint(alice.address, IdBuilder.U8(1))

    await expect(contract.withSigner(bob).tx.transfer(bob.address, IdBuilder.U8(1), [])).to.eventually.be.rejected
  })

  it('Cannot burn NFT if not owner', async () => {
    const contract = await setup()

    const { Alice: alice, Bob: bob } = Signers

    await contract.tx.mint(alice.address, IdBuilder.U8(1))

    await expect(contract.withSigner(bob).tx.burn(alice.address, IdBuilder.U8(1))).to.eventually.be.rejected
  })

  it('Cannot set collection name if not owner', async () => {
    const contract = await setup()

    await expect(contract.withSigner(Signers.Bob).tx.setCollectionName('New name')).to.eventually.be.rejected
  })

  it('Cannot set collection uri if not owner', async () => {
    const contract = await setup()

    await expect(contract.withSigner(Signers.Bob).tx.setCollectionUri('New uri')).to.eventually.be.rejected
  })

  it('Cannot set collection additional info if not owner', async () => {
    const contract = await setup()

    await expect(contract.withSigner(Signers.Bob).tx.setCollectionAdditionalInfo('New info')).to.eventually.be.rejected
  })

  it('Cannot mint NFT if already minted', async () => {
    const contract = await setup()

    const alice = Signers.Alice

    await contract.tx.mint(alice.address, IdBuilder.U8(1))

    await expect(contract.tx.mint(alice.address, IdBuilder.U8(1))).to.eventually.be.rejected
  })

  after(async () => {
    await ApiSingleton.disconnect()
  })
})
