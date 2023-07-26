import ApiSingleton from "../api_singleton";
import {Signers} from "../signers";
import Constructors from "../../../typechain-generated/constructors/user";
import Contract from "../../../typechain-generated/contracts/user";

export async function setupUser() {
    let api = await ApiSingleton.getInstance();

    const defaultSigner = Signers.defaultSigner;

    let constructors = new Constructors(api, defaultSigner);

    let {address} = await constructors.new(
        defaultSigner.address,
    );

    return new Contract(address, defaultSigner, api);
}