"use strict";
/* This file is auto-generated */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
const utils_1 = require("../shared/utils");
const my_psp22_json_1 = __importDefault(require("../event-data/my_psp22.json"));
class Methods {
    constructor(apiPromise, nativeContract, keyringPair) {
        this.__apiPromise = apiPromise;
        this.__nativeContract = nativeContract;
        this.__keyringPair = keyringPair;
    }
    /**
    * totalSupply
    *
    */
    "totalSupply"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::totalSupply", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_psp22_json_1.default);
        }, [], __options);
    }
    /**
    * increaseAllowance
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } deltaValue,
    */
    "increaseAllowance"(spender, deltaValue, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::increaseAllowance", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_psp22_json_1.default);
        }, [spender, deltaValue], __options);
    }
    /**
    * allowance
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.AccountId } spender,
    */
    "allowance"(owner, spender, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::allowance", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_psp22_json_1.default);
        }, [owner, spender], __options);
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
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::transferFrom", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_psp22_json_1.default);
        }, [from, to, value, data], __options);
    }
    /**
    * balanceOf
    *
    * @param { ArgumentTypes.AccountId } owner,
    */
    "balanceOf"(owner, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::balanceOf", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_psp22_json_1.default);
        }, [owner], __options);
    }
    /**
    * transfer
    *
    * @param { ArgumentTypes.AccountId } to,
    * @param { (string | number | BN) } value,
    * @param { Array<(number | string | BN)> } data,
    */
    "transfer"(to, value, data, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::transfer", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_psp22_json_1.default);
        }, [to, value, data], __options);
    }
    /**
    * approve
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } value,
    */
    "approve"(spender, value, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::approve", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_psp22_json_1.default);
        }, [spender, value], __options);
    }
    /**
    * decreaseAllowance
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } deltaValue,
    */
    "decreaseAllowance"(spender, deltaValue, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::decreaseAllowance", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_psp22_json_1.default);
        }, [spender, deltaValue], __options);
    }
    /**
    * mint
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    */
    "mint"(account, amount, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22Mintable::mint", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_psp22_json_1.default);
        }, [account, amount], __options);
    }
    /**
    * burn
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    */
    "burn"(account, amount, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22Burnable::burn", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_psp22_json_1.default);
        }, [account, amount], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=my_psp22.js.map