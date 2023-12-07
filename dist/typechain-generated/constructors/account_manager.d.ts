import type { KeyringPair } from "@polkadot/keyring/types";
import type { ApiPromise } from "@polkadot/api";
import { SignAndSendSuccessResponse } from "@727-ventures/typechain-types";
import type { ConstructorOptions, ExternalSigner } from "@727-ventures/typechain-types";
import type * as ArgumentTypes from '../types-arguments/account_manager';
export default class Constructors {
    readonly nativeAPI: ApiPromise;
    readonly signer: KeyringPair | ExternalSigner;
    constructor(nativeAPI: ApiPromise, signer: KeyringPair | ExternalSigner);
    /**
    * new
    *
    * @param { ArgumentTypes.Hash } userCodeHash,
    * @param { ArgumentTypes.Hash } creatorCodeHash,
    */
    "new"(userCodeHash: ArgumentTypes.Hash, creatorCodeHash: ArgumentTypes.Hash, __options?: ConstructorOptions): Promise<{
        result: SignAndSendSuccessResponse;
        address: any;
    }>;
}
