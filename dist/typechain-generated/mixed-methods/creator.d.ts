import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/creator';
import type * as ReturnTypes from '../types-returns/creator';
import type BN from 'bn.js';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __keyringPair: KeyringPair;
    readonly __callerAddress: string;
    readonly __apiPromise: ApiPromise;
    constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair);
    /**
    * getUserData
    *
    * @returns { Result<ReturnTypes.UserData, ReturnTypes.LangError> }
    */
    "getUserData"(__options: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.UserData, ReturnTypes.LangError>>>;
    /**
    * setUserData
    *
    * @param { ArgumentTypes.UserData } userInfo,
    * @returns { void }
    */
    "setUserData"(userInfo: ArgumentTypes.UserData, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * getCollectionIdByIndex
    *
    * @param { (number | string | BN) } index,
    * @returns { Result<Result<ReturnTypes.AccountId, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "getCollectionIdByIndex"(index: (number | string | BN), __options: GasLimit): Promise<QueryReturnType<Result<Result<ReturnTypes.AccountId, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * getCollectionCount
    *
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "getCollectionCount"(__options: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * createCollection
    *
    * @param { string } name,
    * @param { string } uri,
    * @param { (number | string | BN) } royalty,
    * @param { string } additionalInfo,
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { void }
    */
    "createCollection"(name: string, uri: string, royalty: (number | string | BN), additionalInfo: string, codeHash: ArgumentTypes.Hash, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { void }
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
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
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { void }
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
}
