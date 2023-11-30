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
     * isCollectionDeployed
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "isCollectionDeployed"(collection, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::isCollectionDeployed", [collection], __options);
    }
    /**
     * unbanCollection
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "unbanCollection"(collection, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::unbanCollection", [collection], __options);
    }
    /**
     * collection
     *
     * @param { (string | number | BN) } index,
    */
    "collection"(index, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::collection", [index], __options);
    }
    /**
     * isCodehashBanned
     *
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "isCodehashBanned"(codeHash, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::isCodehashBanned", [codeHash], __options);
    }
    /**
     * unbanCodehash
     *
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "unbanCodehash"(codeHash, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::unbanCodehash", [codeHash], __options);
    }
    /**
     * isWhitelistEnabled
     *
    */
    "isWhitelistEnabled"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::isWhitelistEnabled", [], __options);
    }
    /**
     * isBanned
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "isBanned"(collection, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::isBanned", [collection], __options);
    }
    /**
     * whitelistCollection
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "whitelistCollection"(collection, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::whitelistCollection", [collection], __options);
    }
    /**
     * banCodehash
     *
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "banCodehash"(codeHash, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::banCodehash", [codeHash], __options);
    }
    /**
     * isWhitelisted
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "isWhitelisted"(collection, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::isWhitelisted", [collection], __options);
    }
    /**
     * collectionCount
     *
    */
    "collectionCount"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::collectionCount", [], __options);
    }
    /**
     * instantiateCollection
     *
     * @param { ArgumentTypes.CollectionInfo } collectionInfo,
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "instantiateCollection"(collectionInfo, codeHash, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::instantiateCollection", [collectionInfo, codeHash], __options);
    }
    /**
     * setWhitelistEnabled
     *
     * @param { boolean } enabled,
    */
    "setWhitelistEnabled"(enabled, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::setWhitelistEnabled", [enabled], __options);
    }
    /**
     * banCollection
     *
     * @param { ArgumentTypes.AccountId } collection,
    */
    "banCollection"(collection, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collectionFabric::banCollection", [collection], __options);
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
     * renounceOwnership
     *
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "ownable::renounceOwnership", [], __options);
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
     * getRoleAdmin
     *
     * @param { (number | string | BN) } role,
    */
    "getRoleAdmin"(role, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accessControl::getRoleAdmin", [role], __options);
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
     * setCodeHash
     *
     * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "upgradeable::setCodeHash", [newCodeHash], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=collection_fabric.js.map