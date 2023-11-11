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
     * setTimestamp
     *
     * @param { (number | string | BN) } timestamp,
    */
    "setTimestamp"(timestamp, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "setTimestamp", [timestamp], __options);
    }
    /**
     * addTimestamp
     *
     * @param { (number | string | BN) } delta,
    */
    "addTimestamp"(delta, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "addTimestamp", [delta], __options);
    }
    /**
     * getListingByIndex
     *
     * @param { (string | number | BN) } index,
    */
    "getListingByIndex"(index, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "marketplace::getListingByIndex", [index], __options);
    }
    /**
     * cancelListing
     *
     * @param { (string | number | BN) } listingId,
    */
    "cancelListing"(listingId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "marketplace::cancelListing", [listingId], __options);
    }
    /**
     * buyNft
     *
     * @param { (string | number | BN) } listingId,
    */
    "buyNft"(listingId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "marketplace::buyNft", [listingId], __options);
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
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "marketplace::listNftForSale", [creator, collection, tokenId, price, currency], __options);
    }
    /**
     * getListingCount
     *
    */
    "getListingCount"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "marketplace::getListingCount", [], __options);
    }
    /**
     * buyBatch
     *
     * @param { Array<(string | number | BN)> } ids,
    */
    "buyBatch"(ids, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "marketplace::buyBatch", [ids], __options);
    }
    /**
     * cancelAuction
     *
     * @param { (string | number | BN) } auctionId,
    */
    "cancelAuction"(auctionId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "auction::cancelAuction", [auctionId], __options);
    }
    /**
     * claimNft
     *
     * @param { (string | number | BN) } auctionId,
    */
    "claimNft"(auctionId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "auction::claimNft", [auctionId], __options);
    }
    /**
     * startAuction
     *
     * @param { (string | number | BN) } auctionId,
    */
    "startAuction"(auctionId, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "auction::startAuction", [auctionId], __options);
    }
    /**
     * listNftForAuction
     *
     * @param { ArgumentTypes.AuctionInfo } auctionInfo,
    */
    "listNftForAuction"(auctionInfo, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "auction::listNftForAuction", [auctionInfo], __options);
    }
    /**
     * bidNft
     *
     * @param { (string | number | BN) } auctionId,
     * @param { (string | number | BN) } price,
    */
    "bidNft"(auctionId, price, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "auction::bidNft", [auctionId, price], __options);
    }
    /**
     * getAuctionCount
     *
    */
    "getAuctionCount"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "auction::getAuctionCount", [], __options);
    }
    /**
     * getAuctionByIndex
     *
     * @param { (string | number | BN) } index,
    */
    "getAuctionByIndex"(index, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "auction::getAuctionByIndex", [index], __options);
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
     * timestamp
     *
    */
    "timestamp"(__options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "timestampProvider::timestamp", [], __options);
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
     * grantRole
     *
     * @param { (number | string | BN) } role,
     * @param { ArgumentTypes.AccountId | null } account,
    */
    "grantRole"(role, account, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "accessControl::grantRole", [role, account], __options);
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
     * setCodeHash
     *
     * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash, __options) {
        return (0, typechain_types_1.buildSubmittableExtrinsic)(this.__apiPromise, this.__nativeContract, "upgradeable::setCodeHash", [newCodeHash], __options);
    }
}
exports.default = Methods;
//# sourceMappingURL=mock_auction.js.map