import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/my_psp22';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __apiPromise: ApiPromise;
    constructor(nativeContract: ContractPromise, apiPromise: ApiPromise);
    /**
     * increaseAllowance
     *
     * @param { ArgumentTypes.AccountId } spender,
     * @param { (string | number | BN) } deltaValue,
    */
    "increaseAllowance"(spender: ArgumentTypes.AccountId, deltaValue: (string | number | BN), __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * transferFrom
     *
     * @param { ArgumentTypes.AccountId } from,
     * @param { ArgumentTypes.AccountId } to,
     * @param { (string | number | BN) } value,
     * @param { Array<(number | string | BN)> } data,
    */
    "transferFrom"(from: ArgumentTypes.AccountId, to: ArgumentTypes.AccountId, value: (string | number | BN), data: Array<(number | string | BN)>, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * transfer
     *
     * @param { ArgumentTypes.AccountId } to,
     * @param { (string | number | BN) } value,
     * @param { Array<(number | string | BN)> } data,
    */
    "transfer"(to: ArgumentTypes.AccountId, value: (string | number | BN), data: Array<(number | string | BN)>, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * decreaseAllowance
     *
     * @param { ArgumentTypes.AccountId } spender,
     * @param { (string | number | BN) } deltaValue,
    */
    "decreaseAllowance"(spender: ArgumentTypes.AccountId, deltaValue: (string | number | BN), __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * balanceOf
     *
     * @param { ArgumentTypes.AccountId } owner,
    */
    "balanceOf"(owner: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * allowance
     *
     * @param { ArgumentTypes.AccountId } owner,
     * @param { ArgumentTypes.AccountId } spender,
    */
    "allowance"(owner: ArgumentTypes.AccountId, spender: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * totalSupply
     *
    */
    "totalSupply"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * approve
     *
     * @param { ArgumentTypes.AccountId } spender,
     * @param { (string | number | BN) } value,
    */
    "approve"(spender: ArgumentTypes.AccountId, value: (string | number | BN), __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * mint
     *
     * @param { ArgumentTypes.AccountId } account,
     * @param { (string | number | BN) } amount,
    */
    "mint"(account: ArgumentTypes.AccountId, amount: (string | number | BN), __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * burn
     *
     * @param { ArgumentTypes.AccountId } account,
     * @param { (string | number | BN) } amount,
    */
    "burn"(account: ArgumentTypes.AccountId, amount: (string | number | BN), __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
}
