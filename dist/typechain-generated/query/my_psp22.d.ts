import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/my_psp22';
import type * as ReturnTypes from '../types-returns/my_psp22';
import type BN from 'bn.js';
import { ReturnNumber } from '@727-ventures/typechain-types';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __apiPromise: ApiPromise;
    readonly __callerAddress: string;
    constructor(nativeContract: ContractPromise, nativeApi: ApiPromise, callerAddress: string);
    /**
    * totalSupply
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "totalSupply"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * increaseAllowance
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } deltaValue,
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "increaseAllowance"(spender: ArgumentTypes.AccountId, deltaValue: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError>>>;
    /**
    * allowance
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.AccountId } spender,
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "allowance"(owner: ArgumentTypes.AccountId, spender: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * transferFrom
    *
    * @param { ArgumentTypes.AccountId } from,
    * @param { ArgumentTypes.AccountId } to,
    * @param { (string | number | BN) } value,
    * @param { Array<(number | string | BN)> } data,
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "transferFrom"(from: ArgumentTypes.AccountId, to: ArgumentTypes.AccountId, value: (string | number | BN), data: Array<(number | string | BN)>, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError>>>;
    /**
    * balanceOf
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "balanceOf"(owner: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * transfer
    *
    * @param { ArgumentTypes.AccountId } to,
    * @param { (string | number | BN) } value,
    * @param { Array<(number | string | BN)> } data,
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "transfer"(to: ArgumentTypes.AccountId, value: (string | number | BN), data: Array<(number | string | BN)>, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError>>>;
    /**
    * approve
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } value,
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "approve"(spender: ArgumentTypes.AccountId, value: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError>>>;
    /**
    * decreaseAllowance
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } deltaValue,
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "decreaseAllowance"(spender: ArgumentTypes.AccountId, deltaValue: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError>>>;
    /**
    * mint
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "mint"(account: ArgumentTypes.AccountId, amount: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError>>>;
    /**
    * burn
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "burn"(account: ArgumentTypes.AccountId, amount: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError>>>;
}
