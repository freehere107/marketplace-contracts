"use strict";
/* This file is auto-generated */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
const utils_1 = require("../shared/utils");
const collection_fabric_json_1 = __importDefault(require("../event-data/collection_fabric.json"));
class Methods {
    constructor(apiPromise, nativeContract, keyringPair) {
        this.__apiPromise = apiPromise;
        this.__nativeContract = nativeContract;
        this.__keyringPair = keyringPair;
    }
    /**
    * isCollectionDeployed
    *
    * @param { ArgumentTypes.AccountId } collection,
    */
    "isCollectionDeployed"(collection, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::isCollectionDeployed", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [collection], __options);
    }
    /**
    * unbanCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    */
    "unbanCollection"(collection, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::unbanCollection", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [collection], __options);
    }
    /**
    * collection
    *
    * @param { (string | number | BN) } index,
    */
    "collection"(index, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::collection", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [index], __options);
    }
    /**
    * isCodehashBanned
    *
    * @param { ArgumentTypes.Hash } codeHash,
    */
    "isCodehashBanned"(codeHash, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::isCodehashBanned", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [codeHash], __options);
    }
    /**
    * unbanCodehash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    */
    "unbanCodehash"(codeHash, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::unbanCodehash", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [codeHash], __options);
    }
    /**
    * isWhitelistEnabled
    *
    */
    "isWhitelistEnabled"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::isWhitelistEnabled", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [], __options);
    }
    /**
    * isBanned
    *
    * @param { ArgumentTypes.AccountId } collection,
    */
    "isBanned"(collection, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::isBanned", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [collection], __options);
    }
    /**
    * whitelistCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    */
    "whitelistCollection"(collection, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::whitelistCollection", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [collection], __options);
    }
    /**
    * banCodehash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    */
    "banCodehash"(codeHash, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::banCodehash", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [codeHash], __options);
    }
    /**
    * isWhitelisted
    *
    * @param { ArgumentTypes.AccountId } collection,
    */
    "isWhitelisted"(collection, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::isWhitelisted", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [collection], __options);
    }
    /**
    * collectionCount
    *
    */
    "collectionCount"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::collectionCount", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [], __options);
    }
    /**
    * instantiateCollection
    *
    * @param { ArgumentTypes.CollectionInfo } collectionInfo,
    * @param { ArgumentTypes.Hash } codeHash,
    */
    "instantiateCollection"(collectionInfo, codeHash, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::instantiateCollection", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [collectionInfo, codeHash], __options);
    }
    /**
    * setWhitelistEnabled
    *
    * @param { boolean } enabled,
    */
    "setWhitelistEnabled"(enabled, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::setWhitelistEnabled", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [enabled], __options);
    }
    /**
    * banCollection
    *
    * @param { ArgumentTypes.AccountId } collection,
    */
    "banCollection"(collection, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collectionFabric::banCollection", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [collection], __options);
    }
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "addAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::addAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [accountId], __options);
    }
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "isAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::isAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [accountId], __options);
    }
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "removeAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::removeAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [accountId], __options);
    }
    /**
    * renounceOwnership
    *
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [], __options);
    }
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [newOwner], __options);
    }
    /**
    * owner
    *
    */
    "owner"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::owner", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [], __options);
    }
    /**
    * renounceRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "renounceRole"(role, account, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::renounceRole", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [role, account], __options);
    }
    /**
    * hasRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } address,
    */
    "hasRole"(role, address, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::hasRole", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [role, address], __options);
    }
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    */
    "getRoleAdmin"(role, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::getRoleAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [role], __options);
    }
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "revokeRole"(role, account, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::revokeRole", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [role, account], __options);
    }
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "grantRole"(role, account, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::grantRole", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [role, account], __options);
    }
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "upgradeable::setCodeHash", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, collection_fabric_json_1.default);
        }, [newCodeHash], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=collection_fabric.js.map