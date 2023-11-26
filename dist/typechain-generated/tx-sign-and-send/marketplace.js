"use strict";
/* This file is auto-generated */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typechain_types_1 = require("@727-ventures/typechain-types");
const utils_1 = require("../shared/utils");
const marketplace_json_1 = __importDefault(require("../event-data/marketplace.json"));
class Methods {
    constructor(apiPromise, nativeContract, keyringPair) {
        this.__apiPromise = apiPromise;
        this.__nativeContract = nativeContract;
        this.__keyringPair = keyringPair;
    }
    /**
    * getListingByIndex
    *
    * @param { (string | number | BN) } index,
    */
    "getListingByIndex"(index, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "marketplace::getListingByIndex", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [index], __options);
    }
    /**
    * cancelListing
    *
    * @param { (string | number | BN) } listingId,
    */
    "cancelListing"(listingId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "marketplace::cancelListing", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [listingId], __options);
    }
    /**
    * buyBatch
    *
    * @param { Array<(string | number | BN)> } ids,
    */
    "buyBatch"(ids, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "marketplace::buyBatch", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [ids], __options);
    }
    /**
    * getListingCount
    *
    */
    "getListingCount"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "marketplace::getListingCount", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [], __options);
    }
    /**
    * listNftForSale
    *
    * @param { ArgumentTypes.AccountId } creator,
    * @param { ArgumentTypes.AccountId } collection,
    * @param { ArgumentTypes.Id } tokenId,
    * @param { (string | number | BN) } price,
    * @param { ArgumentTypes.Currency } currency,
    */
    "listNftForSale"(creator, collection, tokenId, price, currency, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "marketplace::listNftForSale", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [creator, collection, tokenId, price, currency], __options);
    }
    /**
    * buyNft
    *
    * @param { (string | number | BN) } listingId,
    */
    "buyNft"(listingId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "marketplace::buyNft", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [listingId], __options);
    }
    /**
    * listNftForAuction
    *
    * @param { ArgumentTypes.AuctionInfo } auctionInfo,
    */
    "listNftForAuction"(auctionInfo, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "auction::listNftForAuction", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [auctionInfo], __options);
    }
    /**
    * getAuctionByIndex
    *
    * @param { (string | number | BN) } index,
    */
    "getAuctionByIndex"(index, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "auction::getAuctionByIndex", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [index], __options);
    }
    /**
    * cancelAuction
    *
    * @param { (string | number | BN) } auctionId,
    */
    "cancelAuction"(auctionId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "auction::cancelAuction", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [auctionId], __options);
    }
    /**
    * getAuctionCount
    *
    */
    "getAuctionCount"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "auction::getAuctionCount", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [], __options);
    }
    /**
    * startAuction
    *
    * @param { (string | number | BN) } auctionId,
    */
    "startAuction"(auctionId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "auction::startAuction", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [auctionId], __options);
    }
    /**
    * claimNft
    *
    * @param { (string | number | BN) } auctionId,
    */
    "claimNft"(auctionId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "auction::claimNft", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [auctionId], __options);
    }
    /**
    * bidNft
    *
    * @param { (string | number | BN) } auctionId,
    * @param { (string | number | BN) } price,
    */
    "bidNft"(auctionId, price, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "auction::bidNft", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [auctionId, price], __options);
    }
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "removeAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::removeAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [accountId], __options);
    }
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "isAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::isAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [accountId], __options);
    }
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    */
    "addAdmin"(accountId, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "adminAccess::addAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [accountId], __options);
    }
    /**
    * timestamp
    *
    */
    "timestamp"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "timestampProvider::timestamp", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [], __options);
    }
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::transferOwnership", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [newOwner], __options);
    }
    /**
    * owner
    *
    */
    "owner"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::owner", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [], __options);
    }
    /**
    * renounceOwnership
    *
    */
    "renounceOwnership"(__options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "ownable::renounceOwnership", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [], __options);
    }
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "revokeRole"(role, account, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::revokeRole", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [role, account], __options);
    }
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    */
    "getRoleAdmin"(role, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::getRoleAdmin", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [role], __options);
    }
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    */
    "grantRole"(role, account, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "accessControl::grantRole", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
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
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
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
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [role, address], __options);
    }
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_1.txSignAndSend)(this.__apiPromise, this.__nativeContract, this.__keyringPair, "upgradeable::setCodeHash", (events) => {
            return (0, utils_1.decodeEvents)(events, this.__nativeContract, marketplace_json_1.default);
        }, [newCodeHash], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=marketplace.js.map