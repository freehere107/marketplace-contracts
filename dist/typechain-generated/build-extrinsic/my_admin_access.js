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
     * removeAdmin
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "removeAdmin"(accountId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "adminAccess::removeAdmin", [accountId], __options);
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
     * addAdmin
     *
     * @param { ArgumentTypes.AccountId } accountId,
    */
    "addAdmin"(accountId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "adminAccess::addAdmin", [accountId], __options);
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
     * grantRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } account,
    */
    "grantRole"(role, account, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accessControl::grantRole", [role, account], __options);
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
     * revokeRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } account,
    */
    "revokeRole"(role, account, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accessControl::revokeRole", [role, account], __options);
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
     * getRoleAdmin
     *
     * @param { (number | string | BN) } role,
    */
    "getRoleAdmin"(role, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accessControl::getRoleAdmin", [role], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=my_admin_access.js.map