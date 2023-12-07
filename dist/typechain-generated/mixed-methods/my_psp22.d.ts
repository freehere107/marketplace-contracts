import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, Result, ExternalSigner } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/my_psp22';
import type * as ReturnTypes from '../types-returns/my_psp22';
import type BN from 'bn.js';
import { ReturnNumber } from '@727-ventures/typechain-types';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __keyringPair: KeyringPair | ExternalSigner;
    readonly __callerAddress: string;
    readonly __apiPromise: ApiPromise;
    constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair | ExternalSigner);
    /**
    * transferFrom
    *
    * @param { ArgumentTypes.AccountId } from,
    * @param { ArgumentTypes.AccountId } to,
    * @param { (string | number | BN) } value,
    * @param { Array<(number | string | BN)> } data,
    * @returns { void }
    */
    "transferFrom"(from: ArgumentTypes.AccountId, to: ArgumentTypes.AccountId, value: (string | number | BN), data: Array<(number | string | BN)>, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * allowance
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.AccountId } spender,
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "allowance"(owner: ArgumentTypes.AccountId, spender: ArgumentTypes.AccountId, __options: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * increaseAllowance
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } deltaValue,
    * @returns { void }
    */
    "increaseAllowance"(spender: ArgumentTypes.AccountId, deltaValue: (string | number | BN), __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * decreaseAllowance
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } deltaValue,
    * @returns { void }
    */
    "decreaseAllowance"(spender: ArgumentTypes.AccountId, deltaValue: (string | number | BN), __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * totalSupply
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "totalSupply"(__options: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * approve
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } value,
    * @returns { void }
    */
    "approve"(spender: ArgumentTypes.AccountId, value: (string | number | BN), __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * balanceOf
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "balanceOf"(owner: ArgumentTypes.AccountId, __options: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * transfer
    *
    * @param { ArgumentTypes.AccountId } to,
    * @param { (string | number | BN) } value,
    * @param { Array<(number | string | BN)> } data,
    * @returns { void }
    */
    "transfer"(to: ArgumentTypes.AccountId, value: (string | number | BN), data: Array<(number | string | BN)>, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * mint
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    * @returns { void }
    */
    "mint"(account: ArgumentTypes.AccountId, amount: (string | number | BN), __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * burn
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    * @returns { void }
    */
    "burn"(account: ArgumentTypes.AccountId, amount: (string | number | BN), __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
}
