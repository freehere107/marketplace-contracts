import ApiSingleton from '../api_singleton'
import { Signers } from '../signers'
import Constructors from '../../../typechain-generated/constructors/marketplace'
import Contract from '../../../typechain-generated/contracts/marketplace'

export async function setupMarketplace() {
  let api = await ApiSingleton.getInstance()

  const defaultSigner = Signers.defaultSigner

  let constructors = new Constructors(api, defaultSigner)

  let { address } = await constructors.new(defaultSigner.address)

  return new Contract(address, defaultSigner, api)
}
