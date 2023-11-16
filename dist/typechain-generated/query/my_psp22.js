"use strict";
/* This file is auto-generated */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
const utils_1 = require("./../shared/utils");
const my_psp22_json_1 = __importDefault(require("../data/my_psp22.json"));
class Methods {
    constructor(nativeContract, nativeApi, callerAddress) {
        this.__nativeContract = nativeContract;
        this.__callerAddress = callerAddress;
        this.__apiPromise = nativeApi;
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
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "increaseAllowance"(spender, deltaValue, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp22::increaseAllowance", [spender, deltaValue], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(8, my_psp22_json_1.default)); });
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
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "transferFrom"(from, to, value, data, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp22::transferFrom", [from, to, value, data], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(8, my_psp22_json_1.default)); });
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
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "transfer"(to, value, data, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp22::transfer", [to, value, data], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(8, my_psp22_json_1.default)); });
    }
    /**
    * approve
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } value,
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "approve"(spender, value, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp22::approve", [spender, value], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(8, my_psp22_json_1.default)); });
    }
    /**
    * decreaseAllowance
    *
    * @param { ArgumentTypes.AccountId } spender,
    * @param { (string | number | BN) } deltaValue,
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "decreaseAllowance"(spender, deltaValue, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp22::decreaseAllowance", [spender, deltaValue], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(8, my_psp22_json_1.default)); });
    }
    /**
    * mint
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "mint"(account, amount, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp22Mintable::mint", [account, amount], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(8, my_psp22_json_1.default)); });
    }
    /**
    * burn
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { (string | number | BN) } amount,
    * @returns { Result<Result<null, ReturnTypes.PSP22Error>, ReturnTypes.LangError> }
    */
    "burn"(account, amount, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp22Burnable::burn", [account, amount], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(8, my_psp22_json_1.default)); });
    }
}
exports.default = Methods;
//# sourceMappingURL=my_psp22.js.map