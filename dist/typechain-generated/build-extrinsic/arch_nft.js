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
     * accountId
     *
    */
    "accountId"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accountId", [], __options);
    }
    /**
     * setCollectionAdditionalInfo
     *
     * @param { string } additionalInfo,
    */
    "setCollectionAdditionalInfo"(additionalInfo, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collection::setCollectionAdditionalInfo", [additionalInfo], __options);
    }
    /**
     * setCollectionUri
     *
     * @param { string } uri,
    */
    "setCollectionUri"(uri, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collection::setCollectionUri", [uri], __options);
    }
    /**
     * collectionAdditionalInfo
     *
    */
    "collectionAdditionalInfo"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collection::collectionAdditionalInfo", [], __options);
    }
    /**
     * collectionUri
     *
    */
    "collectionUri"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collection::collectionUri", [], __options);
    }
    /**
     * collectionName
     *
    */
    "collectionName"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collection::collectionName", [], __options);
    }
    /**
     * collectionRoyalty
     *
    */
    "collectionRoyalty"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collection::collectionRoyalty", [], __options);
    }
    /**
     * setAttribute
     *
     * @param { ArgumentTypes.Id } id,
     * @param { string } key,
     * @param { string } value,
    */
    "setAttribute"(id, key, value, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collection::setAttribute", [id, key, value], __options);
    }
    /**
     * setCollectionName
     *
     * @param { string } name,
    */
    "setCollectionName"(name, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "collection::setCollectionName", [name], __options);
    }
    /**
     * renounceOwnership
     *
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "ownable::renounceOwnership", [], __options);
    }
    /**
     * owner
     *
    */
    "owner"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "ownable::owner", [], __options);
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
     * totalSupply
     *
    */
    "totalSupply"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp34::totalSupply", [], __options);
    }
    /**
     * ownerOf
     *
     * @param { ArgumentTypes.Id } id,
    */
    "ownerOf"(id, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp34::ownerOf", [id], __options);
    }
    /**
     * allowance
     *
     * @param { ArgumentTypes.AccountId } owner,
     * @param { ArgumentTypes.AccountId } operator,
     * @param { ArgumentTypes.Id | null } id,
    */
    "allowance"(owner, operator, id, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp34::allowance", [owner, operator, id], __options);
    }
    /**
     * balanceOf
     *
     * @param { ArgumentTypes.AccountId } owner,
    */
    "balanceOf"(owner, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp34::balanceOf", [owner], __options);
    }
    /**
     * approve
     *
     * @param { ArgumentTypes.AccountId } operator,
     * @param { ArgumentTypes.Id | null } id,
     * @param { boolean } approved,
    */
    "approve"(operator, id, approved, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp34::approve", [operator, id, approved], __options);
    }
    /**
     * collectionId
     *
    */
    "collectionId"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp34::collectionId", [], __options);
    }
    /**
     * transfer
     *
     * @param { ArgumentTypes.AccountId } to,
     * @param { ArgumentTypes.Id } id,
     * @param { Array<(number | string | BN)> } data,
    */
    "transfer"(to, id, data, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp34::transfer", [to, id, data], __options);
    }
    /**
     * mint
     *
     * @param { ArgumentTypes.AccountId } account,
     * @param { ArgumentTypes.Id } id,
    */
    "mint"(account, id, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp34Mintable::mint", [account, id], __options);
    }
    /**
     * burn
     *
     * @param { ArgumentTypes.AccountId } account,
     * @param { ArgumentTypes.Id } id,
    */
    "burn"(account, id, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp34Burnable::burn", [account, id], __options);
    }
    /**
     * getAttribute
     *
     * @param { ArgumentTypes.Id } id,
     * @param { string } key,
    */
    "getAttribute"(id, key, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "psp34Metadata::getAttribute", [id, key], __options);
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
//# sourceMappingURL=arch_nft.js.map