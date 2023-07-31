import ApiSingleton from '../api_singleton'
import { Signers } from '../signers'
import Constructors from '../../../typechain-generated/constructors/account_manager'
import Contract from '../../../typechain-generated/contracts/account_manager'
import { setupCreator } from './creator'
import { setupUser } from './user'

export async function setupAccountManager() {
  const api = await ApiSingleton.getInstance()
  const defaultSigner = Signers.defaultSigner

  const creator = await setupCreator()
  const user = await setupUser()

  const constructors = new Constructors(api, defaultSigner)
  // @ts-ignore
  const { address } = await constructors.new(user.contractAbi.json.source.hash, creator.contractAbi.json.source.hash)

  return new Contract(address, defaultSigner, api)
}
