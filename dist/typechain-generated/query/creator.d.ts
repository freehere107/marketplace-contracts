import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/creator';
import type * as ReturnTypes from '../types-returns/creator';
import type BN from 'bn.js';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __apiPromise: ApiPromise;
    readonly __callerAddress: string;
    constructor(nativeContract: ContractPromise, nativeApi: ApiPromise, callerAddress: string);
    /**
    * getUserData
    *
    * @returns { Result<ReturnTypes.UserData, ReturnTypes.LangError> }
    */
    "getUserData"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.UserData, ReturnTypes.LangError>>>;
    /**
    * setUserData
    *
    * @param { ArgumentTypes.UserData } userInfo,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "setUserData"(userInfo: ArgumentTypes.UserData, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * getCollectionIdByIndex
    *
    * @param { (number | string | BN) } index,
    * @returns { Result<Result<ReturnTypes.AccountId, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "getCollectionIdByIndex"(index: (number | string | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<ReturnTypes.AccountId, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * getCollectionCount
    *
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "getCollectionCount"(__options?: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * createCollection
    *
    * @param { string } name,
    * @param { string } uri,
    * @param { (number | string | BN) } royalty,
    * @param { string } additionalInfo,
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { Result<Result<ReturnTypes.AccountId, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "createCollection"(name: string, uri: string, royalty: (number | string | BN), additionalInfo: string, codeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<ReturnTypes.AccountId, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError>>>;
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
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError> }
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError>>>;
}
