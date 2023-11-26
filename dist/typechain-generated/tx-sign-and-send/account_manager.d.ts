import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/account_manager';
import type BN from 'bn.js';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __keyringPair: KeyringPair;
    readonly __apiPromise: ApiPromise;
    constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair);
    /**
    * getCreatorAccount
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "getCreatorAccount"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * createCreatorAccount
    *
    */
    "createCreatorAccount"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * setCreatorCodeHash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    */
    "setCreatorCodeHash"(codeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * setUserCodeHash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    */
    "setUserCodeHash"(codeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * getUserCodeHash
    *
    */
    "getUserCodeHash"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * getAccount
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "getAccount"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * getCreatorCodeHash
    *
    */
    "getCreatorCodeHash"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * createAccount
    *
    */
    "createAccount"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "addAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "isAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "removeAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * renounceOwnership
    *
    */
    "renounceOwnership"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * owner
    *
    */
    "owner"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    */
    "getRoleAdmin"(role: (number | string | BN), __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * hasRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } address,
    */
    "hasRole"(role: (number | string | BN), address: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "grantRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "revokeRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * renounceRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "renounceRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
}
