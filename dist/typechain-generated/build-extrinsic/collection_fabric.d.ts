import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/collection_fabric';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __apiPromise: ApiPromise;
    constructor(nativeContract: ContractPromise, apiPromise: ApiPromise);
    /**
     * collection
     *
     * @param { (string | number | BN) } index,
    */
    "collection"(index: (string | number | BN), __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * banCollection
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "banCollection"(collection: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * unbanCodehash
     *
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "unbanCodehash"(codeHash: ArgumentTypes.Hash, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * instantiateCollection
     *
     * @param { ArgumentTypes.CollectionInfo } collectionInfo,
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "instantiateCollection"(collectionInfo: ArgumentTypes.CollectionInfo, codeHash: ArgumentTypes.Hash, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * banCodehash
     *
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "banCodehash"(codeHash: ArgumentTypes.Hash, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * isBanned
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "isBanned"(collection: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * setWhitelistEnabled
     *
     * @param { boolean } enabled,
    */
    "setWhitelistEnabled"(enabled: boolean, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * isWhitelistEnabled
     *
    */
    "isWhitelistEnabled"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * isWhitelisted
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "isWhitelisted"(collection: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * collectionCount
     *
    */
    "collectionCount"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * isCodehashBanned
     *
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "isCodehashBanned"(codeHash: ArgumentTypes.Hash, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * unbanCollection
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "unbanCollection"(collection: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * isCollectionDeployed
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "isCollectionDeployed"(collection: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * whitelistCollection
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "whitelistCollection"(collection: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * addAdmin
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "addAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * removeAdmin
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "removeAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * isAdmin
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "isAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
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
     * grantRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } account,
    */
    "grantRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
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
     * getRoleAdmin
     *
     * @param { (number | string | BN) } role,
    */
    "getRoleAdmin"(role: (number | string | BN), __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * revokeRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } account,
    */
    "revokeRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * setCodeHash
     *
     * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
}
