"use strict";
/* This file is auto-generated */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
const utils_1 = require("./../shared/utils");
const user_json_1 = __importDefault(require("../data/user.json"));
class Methods {
    constructor(nativeContract, nativeApi, callerAddress) {
        this.__nativeContract = nativeContract;
        this.__callerAddress = callerAddress;
        this.__apiPromise = nativeApi;
    }
    /**
    * getUserData
    *
    * @returns { Result<ReturnTypes.UserData, ReturnTypes.LangError> }
    */
    "getUserData"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "user::getUserData", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(17, user_json_1.default)); });
    }
    /**
    * setUserData
    *
    * @param { ArgumentTypes.UserData } userInfo,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "setUserData"(userInfo, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "user::setUserData", [userInfo], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(18, user_json_1.default)); });
    }
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::owner", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, user_json_1.default)); });
    }
    /**
    * renounceOwnership
    *
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::renounceOwnership", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(27, user_json_1.default)); });
    }
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::transferOwnership", [newOwner], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(27, user_json_1.default)); });
    }
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError> }
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "upgradeable::setCodeHash", [newCodeHash], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(30, user_json_1.default)); });
    }
}
exports.default = Methods;
//# sourceMappingURL=user.js.map