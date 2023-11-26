import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/user';
import type { ApiPromise } from '@polkadot/api';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __apiPromise: ApiPromise;
    constructor(nativeContract: ContractPromise, apiPromise: ApiPromise);
    /**
     * getUserData
     *
    */
    "getUserData"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * setUserData
     *
     * @param { ArgumentTypes.UserData } userInfo,
    */
    "setUserData"(userInfo: ArgumentTypes.UserData, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * transferOwnership
     *
     * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * renounceOwnership
     *
    */
    "renounceOwnership"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * owner
     *
    */
    "owner"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * setCodeHash
     *
     * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
}
