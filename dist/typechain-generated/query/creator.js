"use strict";
/* This file is auto-generated */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
const utils_1 = require("./../shared/utils");
const creator_json_1 = __importDefault(require("../data/creator.json"));
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
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "user::getUserData", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(17, creator_json_1.default)); });
    }
    /**
    * setUserData
    *
    * @param { ArgumentTypes.UserData } userInfo,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "setUserData"(userInfo, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "user::setUserData", [userInfo], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(18, creator_json_1.default)); });
    }
    /**
    * getCollectionIdByIndex
    *
    * @param { (number | string | BN) } index,
    * @returns { Result<Result<ReturnTypes.AccountId, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "getCollectionIdByIndex"(index, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "creator::getCollectionIdByIndex", [index], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, creator_json_1.default)); });
    }
    /**
    * getCollectionCount
    *
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "getCollectionCount"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "creator::getCollectionCount", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(27, creator_json_1.default)); });
    }
    /**
    * createCollection
    *
    * @param { string } name,
    * @param { string } uri,
    * @param { (number | string | BN) } royalty,
    * @param { string } additionalInfo,
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { Result<Result<ReturnTypes.AccountId, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "createCollection"(name, uri, royalty, additionalInfo, codeHash, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "creator::createCollection", [name, uri, royalty, additionalInfo, codeHash], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, creator_json_1.default)); });
    }
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::transferOwnership", [newOwner], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(29, creator_json_1.default)); });
    }
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::owner", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(31, creator_json_1.default)); });
    }
    /**
    * renounceOwnership
    *
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::renounceOwnership", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(29, creator_json_1.default)); });
    }
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError> }
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "upgradeable::setCodeHash", [newCodeHash], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(33, creator_json_1.default)); });
    }
}
exports.default = Methods;
//# sourceMappingURL=creator.js.map