import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, Result, ExternalSigner } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/my_admin_access';
import type * as ReturnTypes from '../types-returns/my_admin_access';
import type BN from 'bn.js';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __keyringPair: KeyringPair | ExternalSigner;
    readonly __callerAddress: string;
    readonly __apiPromise: ApiPromise;
    constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair | ExternalSigner);
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { void }
    */
    "removeAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { void }
    */
    "addAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
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
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "getRoleAdmin"(role: (number | string | BN), __options: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * hasRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } address,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "hasRole"(role: (number | string | BN), address: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "grantRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "revokeRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * renounceRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "renounceRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
}
