// SPDX-License-Identifier: MIT
import { after, describe } from 'mocha'

import { CollectionInfo } from '../../typechain-generated/types-arguments/collection_fabric'
import { ArchisinalErrorBuilder } from '../../typechain-generated/types-returns/collection_fabric'
import ApiSingleton from '../shared/api_singleton'
import { expect } from '../shared/chai'
import { E2E_PREFIX } from '../shared/consts'
import {
  ADDITIONAL_INFO,
  COLLECTION_CODE_HASH,
  COLLECTION_NAME,
  COLLECTION_ROYALTY,
  COLLECTION_URI,
  setupCollectionFabric as setup,
} from '../shared/test-setups/collection_fabric'

describe(E2E_PREFIX + 'Collection fabric', () => {
  it('Can create collection', async () => {
    const contract = await setup()

    await expect(contract.query.collectionCount()).to.have.returnNumber(0)

    await contract.tx.instantiateCollection(
      {
        name: COLLECTION_NAME,
        uri: COLLECTION_URI,
        royalty: COLLECTION_ROYALTY,
        additionalInfo: ADDITIONAL_INFO,
      } as CollectionInfo,
      COLLECTION_CODE_HASH,
    )

    await expect(contract.query.collectionCount()).to.have.returnNumber(1)
  })

  it('Can ban collection', async () => {
    const contract = await setup()

    await contract.tx.instantiateCollection(
      {
        name: COLLECTION_NAME,
        uri: COLLECTION_URI,
        royalty: COLLECTION_ROYALTY,
        additionalInfo: ADDITIONAL_INFO,
      } as CollectionInfo,
      COLLECTION_CODE_HASH,
    )

    const collection = (await contract.query.collection(0)).value.unwrapRecursively()!

    await expect(contract.query.isBanned(collection)).to.have.returnValue(false)

    await contract.tx.banCollection(collection!)

    await expect(contract.query.isBanned(collection)).to.have.returnValue(true)
  })

  it('Can unban collection', async () => {
    const contract = await setup()

    await contract.tx.instantiateCollection(
      {
        name: COLLECTION_NAME,
        uri: COLLECTION_URI,
        royalty: COLLECTION_ROYALTY,
        additionalInfo: ADDITIONAL_INFO,
      } as CollectionInfo,
      COLLECTION_CODE_HASH,
    )

    const collection = (await contract.query.collection(0)).value.unwrapRecursively()!

    await expect(contract.query.isBanned(collection)).to.have.returnValue(false)

    await contract.tx.banCollection(collection)

    await expect(contract.query.isBanned(collection)).to.have.returnValue(true)

    await contract.tx.unbanCollection(collection)

    await expect(contract.query.isBanned(collection)).to.have.returnValue(false)
  })

  it('Can ban codehash', async () => {
    const contract = await setup()

    await expect(contract.query.isCodehashBanned(COLLECTION_CODE_HASH)).to.have.returnValue(false)

    await contract.tx.banCodehash(COLLECTION_CODE_HASH)

    await expect(contract.query.isCodehashBanned(COLLECTION_CODE_HASH)).to.have.returnValue(true)

    const { err } = (
      await contract.query.instantiateCollection(
        {
          name: COLLECTION_NAME,
          uri: COLLECTION_URI,
          royalty: COLLECTION_ROYALTY,
          additionalInfo: ADDITIONAL_INFO,
        } as CollectionInfo,
        COLLECTION_CODE_HASH,
      )
    ).value.unwrap()

    expect(err).to.be.not.null

    expect(err).to.be.deep.eq(ArchisinalErrorBuilder.CodehashIsBanned())
  })

  it('Can unban codehash', async () => {
    const contract = await setup()

    await contract.tx.banCodehash(COLLECTION_CODE_HASH)

    await expect(contract.query.isCodehashBanned(COLLECTION_CODE_HASH)).to.have.returnValue(true)

    await contract.tx.unbanCodehash(COLLECTION_CODE_HASH)

    await expect(contract.query.isCodehashBanned(COLLECTION_CODE_HASH)).to.have.returnValue(false)
  })

  after(async () => {
    await ApiSingleton.disconnect()
  })
})
