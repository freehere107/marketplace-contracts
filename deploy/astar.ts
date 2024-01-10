// SPDX-License-Identifier: MIT
import 'dotenv/config'

import { ApiPromise, WsProvider } from '@polkadot/api'

import ApiSingleton from '../test/shared/api_singleton'
import {setupAccountManager} from "../test/shared/release-setups/account_manager";
import {setupArchNFT} from "../test/shared/release-setups/arch_nft";
import {setupCreator} from "../test/shared/release-setups/creator";
import {setupMarketplace} from "../test/shared/release-setups/marketplace";
import {setupPSP22} from "../test/shared/release-setups/my_psp22";
import {setupUser} from "../test/shared/release-setups/user";
import {setupCollectionFabric} from '../test/shared/release-setups/collection_fabric'
import { Signers } from '../test/shared/signers'

async function astar() {
  const wsProvider = new WsProvider('wss://rpc.astar.network')

  const api = await ApiPromise.create({
    provider: wsProvider,
  })

  await ApiSingleton.initWithApi(api)

  const mnemonic = process.env.MNEMONIC

  if (!mnemonic) {
    throw new Error('MNEMONIC env variable is not set')
  }

  Signers.setDefaultSigner(mnemonic)

  const psp22 = await setupPSP22()

  // eslint-disable-next-line no-console
  console.log(`PSP22 deployed at ${psp22.address}`)

  const archNft = await setupArchNFT()

  // eslint-disable-next-line no-console
  console.log(`ArchNFT deployed at ${archNft.address}`)

  const user = await setupUser()

  // eslint-disable-next-line no-console
  console.log(`User deployed at ${user.address}`)

  const creator = await setupCreator()

  // eslint-disable-next-line no-console
  console.log(`Creator deployed at ${creator.address}`)

  const collectionFabric = await setupCollectionFabric()

  // eslint-disable-next-line no-console
  console.log(`CollectionFabric deployed at ${collectionFabric.address}`)

  const marketplace = await setupMarketplace('az5LwUN2E5ef9PyxcomXJysbJVrWFShJwkccfN1aw9EUwvz');

  // eslint-disable-next-line no-console
  console.log(`Marketplace deployed at ${marketplace.address}`)

  const accountManager = await setupAccountManager()

  // eslint-disable-next-line no-console
  console.log(`AccountManager deployed at ${accountManager.address}`)

  await ApiSingleton.disconnect()
}
astar()
  .then(() => process.exit(0))
  .catch((error) => {
    /* eslint-disable no-console */
    console.error(error)
    process.exit(1)
  })
