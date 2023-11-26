import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/collection_fabric';
import type * as ReturnTypes from '../types-returns/collection_fabric';
import type BN from 'bn.js';
import { ReturnNumber } from '@727-ventures/typechain-types';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __keyringPair: KeyringPair;
    readonly __callerAddress: string;
    readonly __apiPromise: ApiPromise;
    constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair);
    /**
    * whitelistCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { void }
    */
    "whitelistCollection"(collection: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * collectionCount
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "collectionCount"(__options: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * collection
    *
    * @param { (string | number | BN) } index,
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "collection"(index: (string | number | BN), __options: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * banCodehash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { void }
    */
    "banCodehash"(codeHash: ArgumentTypes.Hash, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * unbanCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { void }
    */
    "unbanCollection"(collection: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * isCodehashBanned
    *
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isCodehashBanned"(codeHash: ArgumentTypes.Hash, __options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * unbanCodehash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { void }
    */
    "unbanCodehash"(codeHash: ArgumentTypes.Hash, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * isWhitelistEnabled
    *
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isWhitelistEnabled"(__options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * isCollectionDeployed
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isCollectionDeployed"(collection: ArgumentTypes.AccountId, __options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * setWhitelistEnabled
    *
    * @param { boolean } enabled,
    * @returns { void }
    */
    "setWhitelistEnabled"(enabled: boolean, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * isWhitelisted
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isWhitelisted"(collection: ArgumentTypes.AccountId, __options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * instantiateCollection
    *
    * @param { ArgumentTypes.CollectionInfo } collectionInfo,
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { void }
    */
    "instantiateCollection"(collectionInfo: ArgumentTypes.CollectionInfo, codeHash: ArgumentTypes.Hash, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * banCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { void }
    */
    "banCollection"(collection: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * isBanned
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isBanned"(collection: ArgumentTypes.AccountId, __options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { void }
    */
    "addAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { void }
    */
    "removeAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * renounceOwnership
    *
    * @returns { void }
    */
    "renounceOwnership"(__options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { void }
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "grantRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * hasRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } address,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "hasRole"(role: (number | string | BN), address: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "getRoleAdmin"(role: (number | string | BN), __options: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * renounceRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "renounceRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "revokeRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { void }
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
}
