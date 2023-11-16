"use strict";
/* This file is auto-generated */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
const typechain_types_2 = require("@727-ventures/typechain-types");
const utils_1 = require("./../shared/utils");
const utils_2 = require("../shared/utils");
const my_psp22_json_1 = __importDefault(require("../data/my_psp22.json"));
const my_psp22_json_2 = __importDefault(require("../event-data/my_psp22.json"));
class Methods {
    constructor(apiPromise, nativeContract, keyringPair) {
        this.__apiPromise = apiPromise;
        this.__nativeContract = nativeContract;
        this.__keyringPair = keyringPair;
        this.__callerAddress = keyringPair.address;
    }
    /**
    * totalSupply
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "totalSupply"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp22::totalSupply", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(4, my_psp22_json_1.default)); });
    }
    /**
    * increaseAllowance
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } deltaValue,
    * @returns { void }
    */
    "increaseAllowance"(spender, deltaValue, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::increaseAllowance", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, my_psp22_json_2.default);
        }, [spender, deltaValue], __options);
    }
    /**
    * allowance
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.AccountId } spender,
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "allowance"(owner, spender, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp22::allowance", [owner, spender], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(4, my_psp22_json_1.default)); });
    }
    /**
    * transferFrom
    *
    * @param { ArgumentTypes.AccountId } from,
    * @param { ArgumentTypes.AccountId } to,
    * @param { (string | number | BN) } value,
    * @param { Array<(number | string | BN)> } data,
    * @returns { void }
    */
    "transferFrom"(from, to, value, data, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::transferFrom", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, my_psp22_json_2.default);
        }, [from, to, value, data], __options);
    }
    /**
    * balanceOf
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "balanceOf"(owner, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp22::balanceOf", [owner], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(4, my_psp22_json_1.default)); });
    }
    /**
    * transfer
    *
    * @param { ArgumentTypes.AccountId } to,
    * @param { (string | number | BN) } value,
    * @param { Array<(number | string | BN)> } data,
    * @returns { void }
    */
    "transfer"(to, value, data, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::transfer", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, my_psp22_json_2.default);
        }, [to, value, data], __options);
    }
    /**
    * approve
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } value,
    * @returns { void }
    */
    "approve"(spender, value, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::approve", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, my_psp22_json_2.default);
        }, [spender, value], __options);
    }
    /**
    * decreaseAllowance
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } deltaValue,
    * @returns { void }
    */
    "decreaseAllowance"(spender, deltaValue, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22::decreaseAllowance", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, my_psp22_json_2.default);
        }, [spender, deltaValue], __options);
    }
    /**
    * mint
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    * @returns { void }
    */
    "mint"(account, amount, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22Mintable::mint", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, my_psp22_json_2.default);
        }, [account, amount], __options);
    }
    /**
    * burn
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    * @returns { void }
    */
    "burn"(account, amount, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp22Burnable::burn", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, my_psp22_json_2.default);
        }, [account, amount], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=my_psp22.js.map