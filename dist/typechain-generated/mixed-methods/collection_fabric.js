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
const collection_fabric_json_1 = __importDefault(require("../data/collection_fabric.json"));
const collection_fabric_json_2 = __importDefault(require("../event-data/collection_fabric.json"));
class Methods {
    constructor(apiPromise, nativeContract, keyringPair) {
        this.__apiPromise = apiPromise;
        this.__nativeContract = nativeContract;
        this.__keyringPair = keyringPair;
        this.__callerAddress = keyringPair.address;
    }
    /**
    * whitelistCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { void }
    */
    "whitelistCollection"(collection, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::whitelistCollection", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [collection], __options);
    }
    /**
    * collectionCount
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "collectionCount"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collectionFabric::collectionCount", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(17, collection_fabric_json_1.default)); });
    }
    /**
    * collection
    *
    * @param { (string | number | BN) } index,
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "collection"(index, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collectionFabric::collection", [index], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(18, collection_fabric_json_1.default)); });
    }
    /**
    * banCodehash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { void }
    */
    "banCodehash"(codeHash, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::banCodehash", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [codeHash], __options);
    }
    /**
    * unbanCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { void }
    */
    "unbanCollection"(collection, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::unbanCollection", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [collection], __options);
    }
    /**
    * isCodehashBanned
    *
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isCodehashBanned"(codeHash, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collectionFabric::isCodehashBanned", [codeHash], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(21, collection_fabric_json_1.default)); });
    }
    /**
    * unbanCodehash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { void }
    */
    "unbanCodehash"(codeHash, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::unbanCodehash", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [codeHash], __options);
    }
    /**
    * isWhitelistEnabled
    *
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isWhitelistEnabled"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collectionFabric::isWhitelistEnabled", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(21, collection_fabric_json_1.default)); });
    }
    /**
    * isCollectionDeployed
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isCollectionDeployed"(collection, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collectionFabric::isCollectionDeployed", [collection], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(21, collection_fabric_json_1.default)); });
    }
    /**
    * setWhitelistEnabled
    *
    * @param { boolean } enabled,
    * @returns { void }
    */
    "setWhitelistEnabled"(enabled, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::setWhitelistEnabled", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [enabled], __options);
    }
    /**
    * isWhitelisted
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isWhitelisted"(collection, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collectionFabric::isWhitelisted", [collection], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(21, collection_fabric_json_1.default)); });
    }
    /**
    * instantiateCollection
    *
    * @param { ArgumentTypes.CollectionInfo } collectionInfo,
    * @param { ArgumentTypes.Hash } codeHash,
    * @returns { void }
    */
    "instantiateCollection"(collectionInfo, codeHash, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::instantiateCollection", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [collectionInfo, codeHash], __options);
    }
    /**
    * banCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { void }
    */
    "banCollection"(collection, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::banCollection", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [collection], __options);
    }
    /**
    * isBanned
    *
    * @param { ArgumentTypes.AccountId } collection,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isBanned"(collection, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collectionFabric::isBanned", [collection], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(21, collection_fabric_json_1.default)); });
    }
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isAdmin"(accountId, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "adminAccess::isAdmin", [accountId], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(21, collection_fabric_json_1.default)); });
    }
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { void }
    */
    "addAdmin"(accountId, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::addAdmin", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [accountId], __options);
    }
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { void }
    */
    "removeAdmin"(accountId, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::removeAdmin", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [accountId], __options);
    }
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::owner", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(18, collection_fabric_json_1.default)); });
    }
    /**
    * renounceOwnership
    *
    * @returns { void }
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [], __options);
    }
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { void }
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [newOwner], __options);
    }
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "grantRole"(role, account, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::grantRole", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [role, account], __options);
    }
    /**
    * hasRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } address,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "hasRole"(role, address, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "accessControl::hasRole", [role, address], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(21, collection_fabric_json_1.default)); });
    }
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "getRoleAdmin"(role, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "accessControl::getRoleAdmin", [role], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(31, collection_fabric_json_1.default)); });
    }
    /**
    * renounceRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "renounceRole"(role, account, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::renounceRole", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [role, account], __options);
    }
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "revokeRole"(role, account, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::revokeRole", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [role, account], __options);
    }
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { void }
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "upgradeable::setCodeHash", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, collection_fabric_json_2.default);
        }, [newCodeHash], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=collection_fabric.js.map