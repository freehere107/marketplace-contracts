import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/account_manager';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __apiPromise: ApiPromise;
    constructor(nativeContract: ContractPromise, apiPromise: ApiPromise);
    /**
     * setCreatorCodeHash
     *
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "setCreatorCodeHash"(codeHash: ArgumentTypes.Hash, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * getAccount
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "getAccount"(accountId: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * getCreatorAccount
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "getCreatorAccount"(accountId: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * getCreatorCodeHash
     *
    */
    "getCreatorCodeHash"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * setUserCodeHash
     *
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "setUserCodeHash"(codeHash: ArgumentTypes.Hash, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * createCreatorAccount
     *
    */
    "createCreatorAccount"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * createAccount
     *
    */
    "createAccount"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * getUserCodeHash
     *
    */
    "getUserCodeHash"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * addAdmin
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "addAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * isAdmin
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "isAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * removeAdmin
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "removeAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * transferOwnership
     *
     * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * owner
     *
    */
    "owner"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * renounceOwnership
     *
    */
    "renounceOwnership"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * revokeRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } account,
    */
    "revokeRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * grantRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } account,
    */
    "grantRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * getRoleAdmin
     *
     * @param { (number | string | BN) } role,
    */
    "getRoleAdmin"(role: (number | string | BN), __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * renounceRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } account,
    */
    "renounceRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * hasRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } address,
    */
    "hasRole"(role: (number | string | BN), address: ArgumentTypes.AccountId | null, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * setCodeHash
     *
     * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
}
