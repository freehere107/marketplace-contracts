import ApiSingleton from '../api_singleton'
import { Signers } from '../signers'
import Constructors from '../../../typechain-generated/constructors/my_admin_access'
import Contract from '../../../typechain-generated/contracts/my_admin_access'

export async function setupAdminAccess() {
    const api = await ApiSingleton.getInstance()
    const defaultSigner = Signers.defaultSigner

    const constructors = new Constructors(api, defaultSigner)
    const { address } = await constructors.new()

    return new Contract(address, defaultSigner, api)
}
