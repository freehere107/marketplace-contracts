import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/account_manager';
import type * as ReturnTypes from '../types-returns/account_manager';
import type BN from 'bn.js';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __apiPromise: ApiPromise;
    readonly __callerAddress: string;
    constructor(nativeContract: ContractPromise, nativeApi: ApiPromise, callerAddress: string);
    /**
    * setUserCodeHash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "setUserCodeHash"(codeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * getCreatorCodeHash
    *
    * @returns { Result<ReturnTypes.Hash, ReturnTypes.LangError> }
    */
    "getCreatorCodeHash"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.Hash, ReturnTypes.LangError>>>;
    /**
    * getAccount
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "getAccount"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * setCreatorCodeHash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "setCreatorCodeHash"(codeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * getCreatorAccount
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "getCreatorAccount"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * getUserCodeHash
    *
    * @returns { Result<ReturnTypes.Hash, ReturnTypes.LangError> }
    */
    "getUserCodeHash"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.Hash, ReturnTypes.LangError>>>;
    /**
    * createCreatorAccount
    *
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "createCreatorAccount"(__options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * createAccount
    *
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "createAccount"(__options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
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
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
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
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
    */
    "revokeRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError>>>;
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
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
    */
    "grantRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError>>>;
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError> }
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError>>>;
}
