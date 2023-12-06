// SPDX-License-Identifier: MIT
import { after, describe } from 'mocha'

import ApiSingleton from '../shared/api_singleton'
import { expect } from '../shared/chai'
import { E2E_PREFIX } from '../shared/consts'
import {
  ADDITIONAL_INFO,
  COLLECTION_CODE_HASH,
  COLLECTION_NAME,
  COLLECTION_ROYALTY,
  COLLECTION_URI,
  setupCreator as setup,
} from '../shared/test-setups/creator'

describe(E2E_PREFIX + 'Creator', () => {
  it('Can edit user data', async () => {
    const contract = await setup()

    await contract.tx.setUserData({
      nick: '@some_nick',
      avatar: null,
      additionInfo: 'Some additional info',
    })

    await expect(contract.query.getUserData()).to.have.deepReturnValue({
      nick: '@some_nick',
      avatar: null,
      additionInfo: 'Some additional info',
    })
  })

  after(async () => {
    await ApiSingleton.disconnect()
  })
})
