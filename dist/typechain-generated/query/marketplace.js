"use strict";
/* This file is auto-generated */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
const utils_1 = require("./../shared/utils");
const marketplace_json_1 = __importDefault(require("../data/marketplace.json"));
class Methods {
    constructor(nativeContract, nativeApi, callerAddress) {
        this.__nativeContract = nativeContract;
        this.__callerAddress = callerAddress;
        this.__apiPromise = nativeApi;
    }
    /**
    * getListingByIndex
    *
    * @param { (string | number | BN) } index,
    * @returns { Result<ReturnTypes.Listing | null, ReturnTypes.LangError> }
    */
    "getListingByIndex"(index, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "marketplace::getListingByIndex", [index], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(11, marketplace_json_1.default)); });
    }
    /**
    * listNftForSale
    *
    * @param { ArgumentTypes.AccountId } creator,
    * @param { ArgumentTypes.AccountId } collection,
    * @param { ArgumentTypes.Id } tokenId,
    * @param { (string | number | BN) } price,
    * @param { ArgumentTypes.Currency } currency,
    * @returns { Result<Result<ReturnNumber, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "listNftForSale"(creator, collection, tokenId, price, currency, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "marketplace::listNftForSale", [creator, collection, tokenId, price, currency], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(17, marketplace_json_1.default)); });
    }
    /**
    * cancelListing
    *
    * @param { (string | number | BN) } listingId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "cancelListing"(listingId, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "marketplace::cancelListing", [listingId], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, marketplace_json_1.default)); });
    }
    /**
    * buyNft
    *
    * @param { (string | number | BN) } listingId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "buyNft"(listingId, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "marketplace::buyNft", [listingId], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, marketplace_json_1.default)); });
    }
    /**
    * getListingCount
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "getListingCount"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "marketplace::getListingCount", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(27, marketplace_json_1.default)); });
    }
    /**
    * buyBatch
    *
    * @param { Array<(string | number | BN)> } ids,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "buyBatch"(ids, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "marketplace::buyBatch", [ids], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, marketplace_json_1.default)); });
    }
    /**
    * cancelAuction
    *
    * @param { (string | number | BN) } auctionId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "cancelAuction"(auctionId, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "auction::cancelAuction", [auctionId], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, marketplace_json_1.default)); });
    }
    /**
    * getAuctionByIndex
    *
    * @param { (string | number | BN) } index,
    * @returns { Result<ReturnTypes.Auction | null, ReturnTypes.LangError> }
    */
    "getAuctionByIndex"(index, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "auction::getAuctionByIndex", [index], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(29, marketplace_json_1.default)); });
    }
    /**
    * bidNft
    *
    * @param { (string | number | BN) } auctionId,
    * @param { (string | number | BN) } price,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "bidNft"(auctionId, price, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "auction::bidNft", [auctionId, price], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, marketplace_json_1.default)); });
    }
    /**
    * claimNft
    *
    * @param { (string | number | BN) } auctionId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "claimNft"(auctionId, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "auction::claimNft", [auctionId], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, marketplace_json_1.default)); });
    }
    /**
    * listNftForAuction
    *
    * @param { ArgumentTypes.AuctionInfo } auctionInfo,
    * @returns { Result<Result<ReturnNumber, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "listNftForAuction"(auctionInfo, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "auction::listNftForAuction", [auctionInfo], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(17, marketplace_json_1.default)); });
    }
    /**
    * startAuction
    *
    * @param { (string | number | BN) } auctionId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "startAuction"(auctionId, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "auction::startAuction", [auctionId], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, marketplace_json_1.default)); });
    }
    /**
    * getAuctionCount
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "getAuctionCount"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "auction::getAuctionCount", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(27, marketplace_json_1.default)); });
    }
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "removeAdmin"(accountId, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "adminAccess::removeAdmin", [accountId], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, marketplace_json_1.default)); });
    }
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isAdmin"(accountId, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "adminAccess::isAdmin", [accountId], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(35, marketplace_json_1.default)); });
    }
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "addAdmin"(accountId, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "adminAccess::addAdmin", [accountId], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(25, marketplace_json_1.default)); });
    }
    /**
    * timestamp
    *
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "timestamp"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "timestampProvider::timestamp", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(37, marketplace_json_1.default)); });
    }
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::owner", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(38, marketplace_json_1.default)); });
    }
    /**
    * renounceOwnership
    *
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::renounceOwnership", [], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(39, marketplace_json_1.default)); });
    }
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "ownable::transferOwnership", [newOwner], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(39, marketplace_json_1.default)); });
    }
    /**
    * renounceRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
    */
    "renounceRole"(role, account, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "accessControl::renounceRole", [role, account], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(41, marketplace_json_1.default)); });
    }
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "getRoleAdmin"(role, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "accessControl::getRoleAdmin", [role], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(43, marketplace_json_1.default)); });
    }
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
    */
    "revokeRole"(role, account, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "accessControl::revokeRole", [role, account], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(41, marketplace_json_1.default)); });
    }
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
    */
    "grantRole"(role, account, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "accessControl::grantRole", [role, account], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(41, marketplace_json_1.default)); });
    }
    /**
    * hasRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } address,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "hasRole"(role, address, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "accessControl::hasRole", [role, address], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(35, marketplace_json_1.default)); });
    }
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError> }
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_1.queryOkJSON)(this.__apiPromise, this.__nativeContract, this.__callerAddress, "upgradeable::setCodeHash", [newCodeHash], __options, (result) => { return (0, typechain_types_1.handleReturnType)(result, (0, utils_1.getTypeDescription)(45, marketplace_json_1.default)); });
    }
}
exports.default = Methods;
//# sourceMappingURL=marketplace.js.map