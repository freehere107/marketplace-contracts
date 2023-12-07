import type { KeyringPair } from "@polkadot/keyring/types";
import type { ApiPromise } from "@polkadot/api";
import { SignAndSendSuccessResponse } from "@727-ventures/typechain-types";
import type { ConstructorOptions, ExternalSigner } from "@727-ventures/typechain-types";
import type * as ArgumentTypes from '../types-arguments/user';
export default class Constructors {
    readonly nativeAPI: ApiPromise;
    readonly signer: KeyringPair | ExternalSigner;
    constructor(nativeAPI: ApiPromise, signer: KeyringPair | ExternalSigner);
    /**
    * new
    *
    * @param { ArgumentTypes.AccountId } owner,
    */
    "new"(owner: ArgumentTypes.AccountId, __options?: ConstructorOptions): Promise<{
        result: SignAndSendSuccessResponse;
        address: any;
    }>;
    /**
    * defaultConstructor
    *
    */
    "defaultConstructor"(__options?: ConstructorOptions): Promise<{
        result: SignAndSendSuccessResponse;
        address: any;
    }>;
    /**
    * newWithData
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.UserData } data,
    */
    "newWithData"(owner: ArgumentTypes.AccountId, data: ArgumentTypes.UserData, __options?: ConstructorOptions): Promise<{
        result: SignAndSendSuccessResponse;
        address: any;
    }>;
}
