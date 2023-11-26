import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/user';
import type * as ReturnTypes from '../types-returns/user';
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
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError>>>;
    /**
    * renounceOwnership
    *
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "renounceOwnership"(__options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError>>>;
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError> }
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError>>>;
}
