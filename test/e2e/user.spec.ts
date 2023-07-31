import { after, describe } from 'mocha'
import { expect } from '../shared/chai'
import ApiSingleton from '../shared/api_singleton'
import { Signers } from '../shared/signers'
import { setupUser as setup } from '../shared/test-setups/user'

describe('User', () => {
  it('Can set user data', async () => {
    const contract = await setup()

    await expect(contract.query.getUserData()).to.have.deepReturnValue({
      nick: null,
      avatar: null,
      additionInfo: null,
    })

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

  it('Cannot set user data if not owner', async () => {
    const contract = await setup()

    await expect(contract.query.getUserData()).to.have.deepReturnValue({
      nick: null,
      avatar: null,
      additionInfo: null,
    })

    await expect(
      contract.withSigner(Signers.Alice).tx.setUserData({
        nick: '@some_nick',
        avatar: null,
        additionInfo: 'Some additional info',
      }),
    ).to.be.rejected

    await expect(contract.query.getUserData()).to.have.deepReturnValue({
      nick: null,
      avatar: null,
      additionInfo: null,
    })
  })

  after(async () => {
    await ApiSingleton.disconnect()
  })
})
