// SPDX-License-Identifier: MIT
import Constructors from '../../../typechain-generated/constructors/marketplace'
import Contract from '../../../typechain-generated/contracts/marketplace'
import CollectionFabricContract from '../../../typechain-generated/contracts/collection_fabric'
import ApiSingleton from '../api_singleton'
import { Signers } from '../signers'
import {gasLimit} from "./shared";

export async function setupMarketplace(collectionFabricAddress: string): Promise<Contract> {
  const api = await ApiSingleton.getInstance()

  const defaultSigner = Signers.defaultSigner

  const constructors = new Constructors(api, defaultSigner)

  const { address } = await constructors.new(defaultSigner.address, collectionFabricAddress, {gasLimit: gasLimit(1000000000, 20000)})

  return new Contract(address, defaultSigner, api)
}
