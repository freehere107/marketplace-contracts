import type { KeyringPair } from "@polkadot/keyring/types";
import type { ApiPromise } from "@polkadot/api";
import { SignAndSendSuccessResponse } from "@727-ventures/typechain-types";
import type { ConstructorOptions } from "@727-ventures/typechain-types";
import type * as ArgumentTypes from '../types-arguments/mock_auction';
export default class Constructors {
    readonly nativeAPI: ApiPromise;
    readonly signer: KeyringPair;
    constructor(nativeAPI: ApiPromise, signer: KeyringPair);
    /**
    * new
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.AccountId } collectionFabricAddress,
    */
    "new"(owner: ArgumentTypes.AccountId, collectionFabricAddress: ArgumentTypes.AccountId, __options?: ConstructorOptions): Promise<{
        result: SignAndSendSuccessResponse;
        address: any;
    }>;
}
