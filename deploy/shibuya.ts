// SPDX-License-Identifier: MIT
import 'dotenv/config'

import { ApiPromise, WsProvider } from '@polkadot/api'

import ApiSingleton from '../test/shared/api_singleton'
import { Signers } from '../test/shared/signers'
import { base } from './base'

async function shibuya() {
  const wsProvider = new WsProvider('wss://rpc.shibuya.astar.network')

  const api = await ApiPromise.create({
    provider: wsProvider,
  })

  await ApiSingleton.initWithApi(api)

  const mnemonic = process.env.MNEMONIC

  if (!mnemonic) {
    throw new Error('MNEMONIC env variable is not set')
  }

  Signers.setDefaultSigner(mnemonic)

  await base()

  await ApiSingleton.disconnect()
}

shibuya()
  .then(() => process.exit(0))
  .catch((error) => {
    /* eslint-disable no-console */
    console.error(error)
    process.exit(1)
  })
