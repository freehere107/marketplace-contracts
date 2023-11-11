"use strict";
/* This file is auto-generated */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
const utils_1 = require("../shared/utils");
const my_admin_access_json_1 = __importDefault(require("../event-data/my_admin_access.json"));
class Methods {
    constructor(apiPromise, nativeContract, keyringPair) {
        this.__apiPromise = apiPromise;
        this.__nativeContract = nativeContract;
        this.__keyringPair = keyringPair;
    }
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "isAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::isAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_admin_access_json_1.default);
        }, [accountId], __options);
    }
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "addAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::addAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_admin_access_json_1.default);
        }, [accountId], __options);
    }
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "removeAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::removeAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_admin_access_json_1.default);
        }, [accountId], __options);
    }
    /**
    * owner
    *
    */
    "owner"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::owner", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_admin_access_json_1.default);
        }, [], __options);
    }
    /**
    * renounceOwnership
    *
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_admin_access_json_1.default);
        }, [], __options);
    }
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_admin_access_json_1.default);
        }, [newOwner], __options);
    }
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "grantRole"(role, account, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::grantRole", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_admin_access_json_1.default);
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
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_admin_access_json_1.default);
        }, [role, address], __options);
    }
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    */
    "getRoleAdmin"(role, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::getRoleAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_admin_access_json_1.default);
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
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_admin_access_json_1.default);
        }, [role, account], __options);
    }
    /**
    * renounceRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "renounceRole"(role, account, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::renounceRole", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, my_admin_access_json_1.default);
        }, [role, account], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=my_admin_access.js.map