import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, ExternalSigner } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/my_psp22';
import type BN from 'bn.js';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __keyringPair: KeyringPair | ExternalSigner;
    readonly __apiPromise: ApiPromise;
    constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair | ExternalSigner);
    /**
    * transferFrom
    *
    * @param { ArgumentTypes.AccountId } from,
    * @param { ArgumentTypes.AccountId } to,
    * @param { (string | number | BN) } value,
    * @param { Array<(number | string | BN)> } data,
    */
    "transferFrom"(from: ArgumentTypes.AccountId, to: ArgumentTypes.AccountId, value: (string | number | BN), data: Array<(number | string | BN)>, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * allowance
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.AccountId } spender,
    */
    "allowance"(owner: ArgumentTypes.AccountId, spender: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * increaseAllowance
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } deltaValue,
    */
    "increaseAllowance"(spender: ArgumentTypes.AccountId, deltaValue: (string | number | BN), __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * decreaseAllowance
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } deltaValue,
    */
    "decreaseAllowance"(spender: ArgumentTypes.AccountId, deltaValue: (string | number | BN), __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * totalSupply
    *
    */
    "totalSupply"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * approve
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } value,
    */
    "approve"(spender: ArgumentTypes.AccountId, value: (string | number | BN), __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * balanceOf
    *
    * @param { ArgumentTypes.AccountId } owner,
    */
    "balanceOf"(owner: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * transfer
    *
    * @param { ArgumentTypes.AccountId } to,
    * @param { (string | number | BN) } value,
    * @param { Array<(number | string | BN)> } data,
    */
    "transfer"(to: ArgumentTypes.AccountId, value: (string | number | BN), data: Array<(number | string | BN)>, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * mint
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    */
    "mint"(account: ArgumentTypes.AccountId, amount: (string | number | BN), __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * burn
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    */
    "burn"(account: ArgumentTypes.AccountId, amount: (string | number | BN), __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
}
