import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/mock_auction';
import type * as ReturnTypes from '../types-returns/mock_auction';
import type BN from 'bn.js';
import { ReturnNumber } from '@727-ventures/typechain-types';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __keyringPair: KeyringPair;
    readonly __callerAddress: string;
    readonly __apiPromise: ApiPromise;
    constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair);
    /**
    * setTimestamp
    *
    * @param { (number | string | BN) } timestamp,
    * @returns { void }
    */
    "setTimestamp"(timestamp: (number | string | BN), __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * addTimestamp
    *
    * @param { (number | string | BN) } delta,
    * @returns { void }
    */
    "addTimestamp"(delta: (number | string | BN), __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * getListingCount
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "getListingCount"(__options: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * getListingByIndex
    *
    * @param { (string | number | BN) } index,
    * @returns { Result<ReturnTypes.Listing | null, ReturnTypes.LangError> }
    */
    "getListingByIndex"(index: (string | number | BN), __options: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.Listing | null, ReturnTypes.LangError>>>;
    /**
    * buyNft
    *
    * @param { (string | number | BN) } listingId,
    * @returns { void }
    */
    "buyNft"(listingId: (string | number | BN), __options: GasLimitAndRequiredValue): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * buyBatch
    *
    * @param { Array<(string | number | BN)> } ids,
    * @returns { void }
    */
    "buyBatch"(ids: Array<(string | number | BN)>, __options: GasLimitAndRequiredValue): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * listNftForSale
    *
    * @param { ArgumentTypes.AccountId } creator,
    * @param { ArgumentTypes.AccountId } collection,
    * @param { ArgumentTypes.Id } tokenId,
    * @param { (string | number | BN) } price,
    * @param { ArgumentTypes.Currency } currency,
    * @returns { void }
    */
    "listNftForSale"(creator: ArgumentTypes.AccountId, collection: ArgumentTypes.AccountId, tokenId: ArgumentTypes.Id, price: (string | number | BN), currency: ArgumentTypes.Currency, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * cancelListing
    *
    * @param { (string | number | BN) } listingId,
    * @returns { void }
    */
    "cancelListing"(listingId: (string | number | BN), __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * bidNft
    *
    * @param { (string | number | BN) } auctionId,
    * @param { (string | number | BN) } price,
    * @returns { void }
    */
    "bidNft"(auctionId: (string | number | BN), price: (string | number | BN), __options: GasLimitAndRequiredValue): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * listNftForAuction
    *
    * @param { ArgumentTypes.AuctionInfo } auctionInfo,
    * @returns { void }
    */
    "listNftForAuction"(auctionInfo: ArgumentTypes.AuctionInfo, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * getAuctionByIndex
    *
    * @param { (string | number | BN) } index,
    * @returns { Result<ReturnTypes.Auction | null, ReturnTypes.LangError> }
    */
    "getAuctionByIndex"(index: (string | number | BN), __options: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.Auction | null, ReturnTypes.LangError>>>;
    /**
    * cancelAuction
    *
    * @param { (string | number | BN) } auctionId,
    * @returns { void }
    */
    "cancelAuction"(auctionId: (string | number | BN), __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * getAuctionCount
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "getAuctionCount"(__options: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * startAuction
    *
    * @param { (string | number | BN) } auctionId,
    * @returns { void }
    */
    "startAuction"(auctionId: (string | number | BN), __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * claimNft
    *
    * @param { (string | number | BN) } auctionId,
    * @returns { void }
    */
    "claimNft"(auctionId: (string | number | BN), __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { void }
    */
    "addAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { void }
    */
    "removeAdmin"(accountId: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * timestamp
    *
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "timestamp"(__options: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * renounceOwnership
    *
    * @returns { void }
    */
    "renounceOwnership"(__options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { void }
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * renounceRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "renounceRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "revokeRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * hasRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } address,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "hasRole"(role: (number | string | BN), address: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "getRoleAdmin"(role: (number | string | BN), __options: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { void }
    */
    "grantRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { void }
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
}
