import { after, describe } from 'mocha'
import ContractUser from '../../typechain-generated/contracts/user'
import { expect } from '../shared/chai'
import ApiSingleton from '../shared/api_singleton'
import { Signers } from '../shared/signers'
import { setupAccountManager as setup } from '../shared/test-setups/account_manager'

describe('Account Manager', () => {
  it('Can create user and creator account', async () => {
    const contract = await setup()

    await contract.tx.createAccount()
    await contract.tx.createCreatorAccount()
  })

  it(`Can't create Account twice`, async () => {
    const contract = await setup()

    await contract.tx.createAccount()

    await expect(contract.query.createAccount()).to.eventually.be.rejected
  })

  it(`Can't create Creator Account twice`, async () => {
    const contract = await setup()

    await contract.tx.createCreatorAccount()

    await expect(contract.query.createCreatorAccount()).to.eventually.be.rejected
  })

  it('Deploys real contract', async () => {
    const contract = await setup()

    const defaultSigner = Signers.defaultSigner

    await contract.tx.createAccount()

    let account = (await contract.query.getAccount(defaultSigner.address)).value.unwrapRecursively()!

    let accountContract = new ContractUser(
      account as unknown as string,
      defaultSigner,
      await ApiSingleton.getInstance(),
    )

    await expect(accountContract.query.owner()).to.have.returnValue(defaultSigner.address)
  })

  after(async () => {
    await ApiSingleton.disconnect()
  })
})
