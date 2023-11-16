"use strict";
/* This file is auto-generated */
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
class Methods {
    constructor(nativeContract, apiPromise) {
        this.__nativeContract = nativeContract;
        this.__apiPromise = apiPromise;
    }
    /**
     * totalSupply
     *
    */
    "totalSupply"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp22::totalSupply", [], __options);
    }
    /**
     * increaseAllowance
     *
     * @param { ArgumentTypes.AccountId } spender,
     * @param { (string | number | BN) } deltaValue,
    */
    "increaseAllowance"(spender, deltaValue, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp22::increaseAllowance", [spender, deltaValue], __options);
    }
    /**
     * allowance
     *
     * @param { ArgumentTypes.AccountId } owner,
     * @param { ArgumentTypes.AccountId } spender,
    */
    "allowance"(owner, spender, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp22::allowance", [owner, spender], __options);
    }
    /**
     * transferFrom
     *
     * @param { ArgumentTypes.AccountId } from,
     * @param { ArgumentTypes.AccountId } to,
     * @param { (string | number | BN) } value,
     * @param { Array<(number | string | BN)> } data,
    */
    "transferFrom"(from, to, value, data, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp22::transferFrom", [from, to, value, data], __options);
    }
    /**
     * balanceOf
     *
     * @param { ArgumentTypes.AccountId } owner,
    */
    "balanceOf"(owner, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp22::balanceOf", [owner], __options);
    }
    /**
     * transfer
     *
     * @param { ArgumentTypes.AccountId } to,
     * @param { (string | number | BN) } value,
     * @param { Array<(number | string | BN)> } data,
    */
    "transfer"(to, value, data, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp22::transfer", [to, value, data], __options);
    }
    /**
     * approve
     *
     * @param { ArgumentTypes.AccountId } spender,
     * @param { (string | number | BN) } value,
    */
    "approve"(spender, value, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp22::approve", [spender, value], __options);
    }
    /**
     * decreaseAllowance
     *
     * @param { ArgumentTypes.AccountId } spender,
     * @param { (string | number | BN) } deltaValue,
    */
    "decreaseAllowance"(spender, deltaValue, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp22::decreaseAllowance", [spender, deltaValue], __options);
    }
    /**
     * mint
     *
     * @param { ArgumentTypes.AccountId } account,
     * @param { (string | number | BN) } amount,
    */
    "mint"(account, amount, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp22Mintable::mint", [account, amount], __options);
    }
    /**
     * burn
     *
     * @param { ArgumentTypes.AccountId } account,
     * @param { (string | number | BN) } amount,
    */
    "burn"(account, amount, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp22Burnable::burn", [account, amount], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=my_psp22.js.map