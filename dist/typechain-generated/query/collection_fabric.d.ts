import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/collection_fabric';
import type * as ReturnTypes from '../types-returns/collection_fabric';
import type BN from 'bn.js';
import { ReturnNumber } from '@727-ventures/typechain-types';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __apiPromise: ApiPromise;
    readonly __callerAddress: string;
    constructor(nativeContract: ContractPromise, nativeApi: ApiPromise, callerAddress: string);
    /**
    * whitelistCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "whitelistCollection"(collection: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * collectionCount
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "collectionCount"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * collection
    *
    * @param { (string | number | BN) } index,
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "collection"(index: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * banCodehash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "banCodehash"(codeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * unbanCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "unbanCollection"(collection: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * isCodehashBanned
    *
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isCodehashBanned"(codeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * unbanCodehash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "unbanCodehash"(codeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * isWhitelistEnabled
    *
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isWhitelistEnabled"(__options?: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * isCollectionDeployed
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isCollectionDeployed"(collection: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * setWhitelistEnabled
    *
    * @param { boolean } enabled,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "setWhitelistEnabled"(enabled: boolean, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * isWhitelisted
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isWhitelisted"(collection: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * instantiateCollection
    *
    * @param { ArgumentTypes.CollectionInfo } collectionInfo,
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { Result<Result<[ReturnNumber, ReturnTypes.AccountId], ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "instantiateCollection"(collectionInfo: ArgumentTypes.CollectionInfo, codeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<[ReturnNumber, ReturnTypes.AccountId], ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * banCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "banCollection"(collection: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * isBanned
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isBanned"(collection: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "addAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "removeAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * renounceOwnership
    *
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "renounceOwnership"(__options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError>>>;
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError>>>;
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
    */
    "grantRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError>>>;
    /**
    * hasRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } address,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "hasRole"(role: (number | string | BN), address: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "getRoleAdmin"(role: (number | string | BN), __options?: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * renounceRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
    */
    "renounceRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError>>>;
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
    */
    "revokeRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError>>>;
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError> }
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError>>>;
}
