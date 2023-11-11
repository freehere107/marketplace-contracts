"use strict";
/* This file is auto-generated */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
const utils_1 = require("../shared/utils");
const arch_nft_json_1 = __importDefault(require("../event-data/arch_nft.json"));
class Methods {
    constructor(apiPromise, nativeContract, keyringPair) {
        this.__apiPromise = apiPromise;
        this.__nativeContract = nativeContract;
        this.__keyringPair = keyringPair;
    }
    /**
    * accountId
    *
    */
    "accountId"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accountId", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [], __options);
    }
    /**
    * collectionName
    *
    */
    "collectionName"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::collectionName", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [], __options);
    }
    /**
    * setAttribute
    *
    * @param { ArgumentTypes.Id } id,
    * @param { string } key,
    * @param { string } value,
    */
    "setAttribute"(id, key, value, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::setAttribute", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [id, key, value], __options);
    }
    /**
    * setCollectionUri
    *
    * @param { string } uri,
    */
    "setCollectionUri"(uri, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::setCollectionUri", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [uri], __options);
    }
    /**
    * collectionRoyalty
    *
    */
    "collectionRoyalty"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::collectionRoyalty", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [], __options);
    }
    /**
    * setCollectionAdditionalInfo
    *
    * @param { string } additionalInfo,
    */
    "setCollectionAdditionalInfo"(additionalInfo, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::setCollectionAdditionalInfo", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [additionalInfo], __options);
    }
    /**
    * collectionAdditionalInfo
    *
    */
    "collectionAdditionalInfo"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::collectionAdditionalInfo", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [], __options);
    }
    /**
    * collectionUri
    *
    */
    "collectionUri"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::collectionUri", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [], __options);
    }
    /**
    * setCollectionName
    *
    * @param { string } name,
    */
    "setCollectionName"(name, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::setCollectionName", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [name], __options);
    }
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [newOwner], __options);
    }
    /**
    * renounceOwnership
    *
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [], __options);
    }
    /**
    * owner
    *
    */
    "owner"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::owner", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [], __options);
    }
    /**
    * ownerOf
    *
    * @param { ArgumentTypes.Id } id,
    */
    "ownerOf"(id, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::ownerOf", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [id], __options);
    }
    /**
    * approve
    *
    * @param { ArgumentTypes.AccountId } operator,
    * @param { ArgumentTypes.Id | null } id,
    * @param { boolean } approved,
    */
    "approve"(operator, id, approved, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::approve", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [operator, id, approved], __options);
    }
    /**
    * allowance
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.AccountId } operator,
    * @param { ArgumentTypes.Id | null } id,
    */
    "allowance"(owner, operator, id, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::allowance", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [owner, operator, id], __options);
    }
    /**
    * transfer
    *
    * @param { ArgumentTypes.AccountId } to,
    * @param { ArgumentTypes.Id } id,
    * @param { Array<(number | string | BN)> } data,
    */
    "transfer"(to, id, data, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::transfer", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [to, id, data], __options);
    }
    /**
    * balanceOf
    *
    * @param { ArgumentTypes.AccountId } owner,
    */
    "balanceOf"(owner, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::balanceOf", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [owner], __options);
    }
    /**
    * totalSupply
    *
    */
    "totalSupply"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::totalSupply", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [], __options);
    }
    /**
    * collectionId
    *
    */
    "collectionId"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::collectionId", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [], __options);
    }
    /**
    * mint
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { ArgumentTypes.Id } id,
    */
    "mint"(account, id, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Mintable::mint", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [account, id], __options);
    }
    /**
    * burn
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { ArgumentTypes.Id } id,
    */
    "burn"(account, id, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Burnable::burn", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [account, id], __options);
    }
    /**
    * getAttribute
    *
    * @param { ArgumentTypes.Id } id,
    * @param { string } key,
    */
    "getAttribute"(id, key, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Metadata::getAttribute", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [id, key], __options);
    }
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "upgradeable::setCodeHash", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, arch_nft_json_1.default);
        }, [newCodeHash], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=arch_nft.js.map