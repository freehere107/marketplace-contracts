// SPDX-License-Identifier: MIT
import 'dotenv/config'

import ApiSingleton from '../test/shared/api_singleton'
import {setupAccountManager} from "../test/shared/test-setups/account_manager";
import {setupArchNFT} from "../test/shared/test-setups/arch_nft";
import {setupCreator} from "../test/shared/test-setups/creator";
import {setupMarketplace} from "../test/shared/test-setups/marketplace";
import {setupPSP22} from "../test/shared/test-setups/my_psp22";
import {setupUser} from "../test/shared/test-setups/user";

export async function base() {
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

  const marketplace = await setupMarketplace()

  // eslint-disable-next-line no-console
  console.log(`Marketplace deployed at ${marketplace.address}`)

  const accountManager = await setupAccountManager()

  // eslint-disable-next-line no-console
  console.log(`AccountManager deployed at ${accountManager.address}`)

  await ApiSingleton.disconnect()
}
