import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/my_admin_access';
import type BN from 'bn.js';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __keyringPair: KeyringPair;
    readonly __apiPromise: ApiPromise;
    constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair);
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "isAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "addAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "removeAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
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
    * renounceOwnership
    *
    */
    "renounceOwnership"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    */
    "getRoleAdmin"(role: (number | string | BN), __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * renounceRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "renounceRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "revokeRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "grantRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * hasRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } address,
    */
    "hasRole"(role: (number | string | BN), address: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
}
