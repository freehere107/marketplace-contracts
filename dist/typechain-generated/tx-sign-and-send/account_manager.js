"use strict";
/* This file is auto-generated */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
const utils_1 = require("../shared/utils");
const account_manager_json_1 = __importDefault(require("../event-data/account_manager.json"));
class Methods {
    constructor(apiPromise, nativeContract, keyringPair) {
        this.__apiPromise = apiPromise;
        this.__nativeContract = nativeContract;
        this.__keyringPair = keyringPair;
    }
    /**
    * createCreatorAccount
    *
    */
    "createCreatorAccount"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accountManager::createCreatorAccount", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [], __options);
    }
    /**
    * setCreatorCodeHash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    */
    "setCreatorCodeHash"(codeHash, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accountManager::setCreatorCodeHash", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [codeHash], __options);
    }
    /**
    * getUserCodeHash
    *
    */
    "getUserCodeHash"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accountManager::getUserCodeHash", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [], __options);
    }
    /**
    * createAccount
    *
    */
    "createAccount"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accountManager::createAccount", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [], __options);
    }
    /**
    * getAccount
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "getAccount"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accountManager::getAccount", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [accountId], __options);
    }
    /**
    * setUserCodeHash
    *
    * @param { ArgumentTypes.Hash } codeHash,
    */
    "setUserCodeHash"(codeHash, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accountManager::setUserCodeHash", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [codeHash], __options);
    }
    /**
    * getCreatorAccount
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "getCreatorAccount"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accountManager::getCreatorAccount", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [accountId], __options);
    }
    /**
    * getCreatorCodeHash
    *
    */
    "getCreatorCodeHash"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accountManager::getCreatorCodeHash", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [], __options);
    }
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "isAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::isAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [accountId], __options);
    }
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "addAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::addAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [accountId], __options);
    }
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "removeAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::removeAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [accountId], __options);
    }
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [newOwner], __options);
    }
    /**
    * renounceOwnership
    *
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [], __options);
    }
    /**
    * owner
    *
    */
    "owner"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::owner", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
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
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [role, account], __options);
    }
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "revokeRole"(role, account, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::revokeRole", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
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
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [role, account], __options);
    }
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    */
    "getRoleAdmin"(role, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::getRoleAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [role], __options);
    }
    /**
    * hasRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } address,
    */
    "hasRole"(role, address, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::hasRole", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [role, address], __options);
    }
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "upgradeable::setCodeHash", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, account_manager_json_1.default);
        }, [newCodeHash], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=account_manager.js.map