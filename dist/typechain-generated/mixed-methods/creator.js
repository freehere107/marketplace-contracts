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
const creator_json_1 = __importDefault(require("../data/creator.json"));
const creator_json_2 = __importDefault(require("../event-data/creator.json"));
class Methods {
    constructor(apiPromise, nativeContract, keyringPair) {
        this.__apiPromise = apiPromise;
        this.__nativeContract = nativeContract;
        this.__keyringPair = keyringPair;
        this.__callerAddress = keyringPair.address;
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
    * @returns { void }
    */
    "setUserData"(userInfo, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "user::setUserData", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, creator_json_2.default);
        }, [userInfo], __options);
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
    * @returns { void }
    */
    "createCollection"(name, uri, royalty, additionalInfo, codeHash, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "creator::createCollection", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, creator_json_2.default);
        }, [name, uri, royalty, additionalInfo, codeHash], __options);
    }
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { void }
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, creator_json_2.default);
        }, [newOwner], __options);
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
    * @returns { void }
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, creator_json_2.default);
        }, [], __options);
    }
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { void }
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "upgradeable::setCodeHash", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, creator_json_2.default);
        }, [newCodeHash], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=creator.js.map