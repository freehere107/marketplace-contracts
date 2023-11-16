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
     * setUserData
     *
     * @param { ArgumentTypes.UserData } userInfo,
    */
    "setUserData"(userInfo, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "user::setUserData", [userInfo], __options);
    }
    /**
     * getUserData
     *
    */
    "getUserData"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "user::getUserData", [], __options);
    }
    /**
     * getCollectionIdByIndex
     *
     * @param { (number | string | BN) } index,
    */
    "getCollectionIdByIndex"(index, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "creator::getCollectionIdByIndex", [index], __options);
    }
    /**
     * getCollectionCount
     *
    */
    "getCollectionCount"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "creator::getCollectionCount", [], __options);
    }
    /**
     * createCollection
     *
     * @param { string } name,
     * @param { string } uri,
     * @param { (number | string | BN) } royalty,
     * @param { string } additionalInfo,
     * @param { ArgumentTypes.Hash } codeHash,
    */
    "createCollection"(name, uri, royalty, additionalInfo, codeHash, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "creator::createCollection", [name, uri, royalty, additionalInfo, codeHash], __options);
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
     * transferOwnership
     *
     * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "ownable::transferOwnership", [newOwner], __options);
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
//# sourceMappingURL=creator.js.map