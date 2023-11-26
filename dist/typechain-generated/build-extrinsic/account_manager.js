"use strict";
/* This file is auto-generated */
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
class Methods {
    constructor(nativeContract, apiPromise) {
        this.__nativeContract = nativeContract;
        this.__apiPromise = apiPromise;
    }
    /**
     * setCreatorCodeHash
     *
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "setCreatorCodeHash"(codeHash, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accountManager::setCreatorCodeHash", [codeHash], __options);
    }
    /**
     * getAccount
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "getAccount"(accountId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accountManager::getAccount", [accountId], __options);
    }
    /**
     * getCreatorAccount
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "getCreatorAccount"(accountId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accountManager::getCreatorAccount", [accountId], __options);
    }
    /**
     * getCreatorCodeHash
     *
    */
    "getCreatorCodeHash"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accountManager::getCreatorCodeHash", [], __options);
    }
    /**
     * setUserCodeHash
     *
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "setUserCodeHash"(codeHash, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accountManager::setUserCodeHash", [codeHash], __options);
    }
    /**
     * createCreatorAccount
     *
    */
    "createCreatorAccount"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accountManager::createCreatorAccount", [], __options);
    }
    /**
     * createAccount
     *
    */
    "createAccount"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accountManager::createAccount", [], __options);
    }
    /**
     * getUserCodeHash
     *
    */
    "getUserCodeHash"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accountManager::getUserCodeHash", [], __options);
    }
    /**
     * addAdmin
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "addAdmin"(accountId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "adminAccess::addAdmin", [accountId], __options);
    }
    /**
     * isAdmin
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "isAdmin"(accountId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "adminAccess::isAdmin", [accountId], __options);
    }
    /**
     * removeAdmin
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "removeAdmin"(accountId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "adminAccess::removeAdmin", [accountId], __options);
    }
    /**
     * transferOwnership
     *
     * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "ownable::transferOwnership", [newOwner], __options);
    }
    /**
     * owner
     *
    */
    "owner"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "ownable::owner", [], __options);
    }
    /**
     * renounceOwnership
     *
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "ownable::renounceOwnership", [], __options);
    }
    /**
     * revokeRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } account,
    */
    "revokeRole"(role, account, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accessControl::revokeRole", [role, account], __options);
    }
    /**
     * grantRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } account,
    */
    "grantRole"(role, account, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accessControl::grantRole", [role, account], __options);
    }
    /**
     * getRoleAdmin
     *
     * @param { (number | string | BN) } role,
    */
    "getRoleAdmin"(role, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accessControl::getRoleAdmin", [role], __options);
    }
    /**
     * renounceRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } account,
    */
    "renounceRole"(role, account, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accessControl::renounceRole", [role, account], __options);
    }
    /**
     * hasRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } address,
    */
    "hasRole"(role, address, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accessControl::hasRole", [role, address], __options);
    }
    /**
     * setCodeHash
     *
     * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "upgradeable::setCodeHash", [newCodeHash], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=account_manager.js.map