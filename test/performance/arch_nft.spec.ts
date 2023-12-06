// SPDX-License-Identifier: MIT
import BN from 'bn.js'
import { describe } from 'mocha'

import Contract from '../../typechain-generated/contracts/arch_nft'
import ApiSingleton from '../shared/api_singleton'
import { expect } from '../shared/chai'
import { PERFORMANCE_PREFIX } from '../shared/consts'
import { Signers } from '../shared/signers'
import { setupArchNFT } from '../shared/test-setups/arch_nft'

const SET_COLLECTION_NAME_MAX_FEE = new BN(3_300_000_000);
const SET_COLLECTION_URI_MAX_FEE = new BN(3_000_000_000);
const SET_COLLECTION_ADDITIONAL_INFO_MAX_FEE = new BN(3_000_000_000);
const UPDATE_NFT_METADATA_MAX_FEE = new BN(3_000_000_000);

describe(PERFORMANCE_PREFIX + 'ArchNFT', function () {
  let contract: Contract

  beforeEach(async function () {
    contract = await setupArchNFT()
  })

  after(async function () {
    await ApiSingleton.disconnect()
  })

  it('Should set collection name within max fee', async function () {
    await expect(contract.query.setCollectionName('test')).to.have.feeLessThan(SET_COLLECTION_NAME_MAX_FEE)
  })

  it('Should set collection URI within max fee', async function () {
    await expect(contract.query.setCollectionUri('test')).to.have.feeLessThan(SET_COLLECTION_URI_MAX_FEE)
  })

  it('Should set collection additional info within max fee', async function () {
    await expect(contract.query.setCollectionAdditionalInfo('test')).to.have.feeLessThan(
      SET_COLLECTION_ADDITIONAL_INFO_MAX_FEE,
    )
  })

  it('Should update NFT metadata within max fee', async function () {
    const id = { u8: 1 };
    await contract.tx.mint(Signers.Alice.address, id)
    const metadata = {
      name: 'New name',
      description: 'New description',
      image: 'New image',
      externalUrl: 'New external url',
      categories: ['New category'],
    };

    await expect(contract.query.updateNftMetadata(id, metadata)).to.have.feeLessThan(UPDATE_NFT_METADATA_MAX_FEE)
  })
})
