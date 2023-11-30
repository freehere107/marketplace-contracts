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
const arch_nft_json_1 = __importDefault(require("../data/arch_nft.json"));
const arch_nft_json_2 = __importDefault(require("../event-data/arch_nft.json"));
class Methods {
    constructor(apiPromise, nativeContract, keyringPair) {
        this.__apiPromise = apiPromise;
        this.__nativeContract = nativeContract;
        this.__keyringPair = keyringPair;
        this.__callerAddress = keyringPair.address;
    }
    /**
    * accountId
    *
    * @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
    */
    "accountId"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "accountId", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(11, arch_nft_json_1.default)); });
    }
    /**
    * collectionAdditionalInfo
    *
    * @returns { Result<string | null, ReturnTypes.LangError> }
    */
    "collectionAdditionalInfo"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collection::collectionAdditionalInfo", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(12, arch_nft_json_1.default)); });
    }
    /**
    * updateNftMetadata
    *
    * @param { ArgumentTypes.Id } id,
    * @param { ArgumentTypes.NftMetadata } metadata,
    * @returns { void }
    */
    "updateNftMetadata"(id, metadata, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::updateNftMetadata", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, arch_nft_json_2.default);
        }, [id, metadata], __options);
    }
    /**
    * getNftMetadata
    *
    * @param { ArgumentTypes.Id } id,
    * @returns { Result<ReturnTypes.NftMetadata | null, ReturnTypes.LangError> }
    */
    "getNftMetadata"(id, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collection::getNftMetadata", [id], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, arch_nft_json_1.default)); });
    }
    /**
    * setCollectionName
    *
    * @param { string } name,
    * @returns { void }
    */
    "setCollectionName"(name, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::setCollectionName", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, arch_nft_json_2.default);
        }, [name], __options);
    }
    /**
    * collectionName
    *
    * @returns { Result<string | null, ReturnTypes.LangError> }
    */
    "collectionName"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collection::collectionName", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(12, arch_nft_json_1.default)); });
    }
    /**
    * collectionRoyalty
    *
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "collectionRoyalty"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collection::collectionRoyalty", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(27, arch_nft_json_1.default)); });
    }
    /**
    * setCollectionAdditionalInfo
    *
    * @param { string } additionalInfo,
    * @returns { void }
    */
    "setCollectionAdditionalInfo"(additionalInfo, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::setCollectionAdditionalInfo", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, arch_nft_json_2.default);
        }, [additionalInfo], __options);
    }
    /**
    * collectionUri
    *
    * @returns { Result<string | null, ReturnTypes.LangError> }
    */
    "collectionUri"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "collection::collectionUri", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(12, arch_nft_json_1.default)); });
    }
    /**
    * setCollectionUri
    *
    * @param { string } uri,
    * @returns { void }
    */
    "setCollectionUri"(uri, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "collection::setCollectionUri", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, arch_nft_json_2.default);
        }, [uri], __options);
    }
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::owner", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(28, arch_nft_json_1.default)); });
    }
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { void }
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, arch_nft_json_2.default);
        }, [newOwner], __options);
    }
    /**
    * renounceOwnership
    *
    * @returns { void }
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, arch_nft_json_2.default);
        }, [], __options);
    }
    /**
    * approve
    *
    * @param { ArgumentTypes.AccountId } operator,
    * @param { ArgumentTypes.Id | null } id,
    * @param { boolean } approved,
    * @returns { void }
    */
    "approve"(operator, id, approved, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::approve", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, arch_nft_json_2.default);
        }, [operator, id, approved], __options);
    }
    /**
    * collectionId
    *
    * @returns { Result<ReturnTypes.Id, ReturnTypes.LangError> }
    */
    "collectionId"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::collectionId", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(36, arch_nft_json_1.default)); });
    }
    /**
    * ownerOf
    *
    * @param { ArgumentTypes.Id } id,
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "ownerOf"(id, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::ownerOf", [id], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(28, arch_nft_json_1.default)); });
    }
    /**
    * allowance
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.AccountId } operator,
    * @param { ArgumentTypes.Id | null } id,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "allowance"(owner, operator, id, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::allowance", [owner, operator, id], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(37, arch_nft_json_1.default)); });
    }
    /**
    * balanceOf
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "balanceOf"(owner, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::balanceOf", [owner], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(27, arch_nft_json_1.default)); });
    }
    /**
    * transfer
    *
    * @param { ArgumentTypes.AccountId } to,
    * @param { ArgumentTypes.Id } id,
    * @param { Array<(number | string | BN)> } data,
    * @returns { void }
    */
    "transfer"(to, id, data, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34::transfer", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, arch_nft_json_2.default);
        }, [to, id, data], __options);
    }
    /**
    * totalSupply
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "totalSupply"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "psp34::totalSupply", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(38, arch_nft_json_1.default)); });
    }
    /**
    * mint
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { ArgumentTypes.Id } id,
    * @returns { void }
    */
    "mint"(account, id, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Mintable::mint", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, arch_nft_json_2.default);
        }, [account, id], __options);
    }
    /**
    * burn
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { ArgumentTypes.Id } id,
    * @returns { void }
    */
    "burn"(account, id, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "psp34Burnable::burn", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, arch_nft_json_2.default);
        }, [account, id], __options);
    }
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { void }
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_2.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "upgradeable::setCodeHash", (events) => {
            return (0, utils_2.decodeEvents)(events, this.__nativeContract, arch_nft_json_2.default);
        }, [newCodeHash], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=arch_nft.js.map