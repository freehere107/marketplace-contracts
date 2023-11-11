import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, GasLimitAndRequiredValue, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/mock_auction';
import type * as ReturnTypes from '../types-returns/mock_auction';
import type BN from 'bn.js';
import { ReturnNumber } from '@727-ventures/typechain-types';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __apiPromise: ApiPromise;
    readonly __callerAddress: string;
    constructor(nativeContract: ContractPromise, nativeApi: ApiPromise, callerAddress: string);
    /**
    * setTimestamp
    *
    * @param { (number | string | BN) } timestamp,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "setTimestamp"(timestamp: (number | string | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * addTimestamp
    *
    * @param { (number | string | BN) } delta,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "addTimestamp"(delta: (number | string | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * getListingByIndex
    *
    * @param { (string | number | BN) } index,
    * @returns { Result<ReturnTypes.Listing | null, ReturnTypes.LangError> }
    */
    "getListingByIndex"(index: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.Listing | null, ReturnTypes.LangError>>>;
    /**
    * cancelListing
    *
    * @param { (string | number | BN) } listingId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "cancelListing"(listingId: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * buyNft
    *
    * @param { (string | number | BN) } listingId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "buyNft"(listingId: (string | number | BN), __options?: GasLimitAndRequiredValue): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
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
    "listNftForSale"(creator: ArgumentTypes.AccountId, collection: ArgumentTypes.AccountId, tokenId: ArgumentTypes.Id, price: (string | number | BN), currency: ArgumentTypes.Currency, __options?: GasLimit): Promise<QueryReturnType<Result<Result<ReturnNumber, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * getListingCount
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "getListingCount"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * buyBatch
    *
    * @param { Array<(string | number | BN)> } ids,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "buyBatch"(ids: Array<(string | number | BN)>, __options?: GasLimitAndRequiredValue): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * cancelAuction
    *
    * @param { (string | number | BN) } auctionId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "cancelAuction"(auctionId: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * claimNft
    *
    * @param { (string | number | BN) } auctionId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "claimNft"(auctionId: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * startAuction
    *
    * @param { (string | number | BN) } auctionId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "startAuction"(auctionId: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * listNftForAuction
    *
    * @param { ArgumentTypes.AuctionInfo } auctionInfo,
    * @returns { Result<Result<ReturnNumber, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "listNftForAuction"(auctionInfo: ArgumentTypes.AuctionInfo, __options?: GasLimit): Promise<QueryReturnType<Result<Result<ReturnNumber, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * bidNft
    *
    * @param { (string | number | BN) } auctionId,
    * @param { (string | number | BN) } price,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "bidNft"(auctionId: (string | number | BN), price: (string | number | BN), __options?: GasLimitAndRequiredValue): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * getAuctionCount
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "getAuctionCount"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * getAuctionByIndex
    *
    * @param { (string | number | BN) } index,
    * @returns { Result<ReturnTypes.Auction | null, ReturnTypes.LangError> }
    */
    "getAuctionByIndex"(index: (string | number | BN), __options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.Auction | null, ReturnTypes.LangError>>>;
    /**
    * removeAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "removeAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * addAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "addAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * isAdmin
    *
    * @param { ArgumentTypes.AccountId } accountId,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "isAdmin"(accountId: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * timestamp
    *
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "timestamp"(__options?: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * renounceOwnership
    *
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "renounceOwnership"(__options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError>>>;
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError>>>;
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * grantRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
    */
    "grantRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError>>>;
    /**
    * hasRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } address,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "hasRole"(role: (number | string | BN), address: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * getRoleAdmin
    *
    * @param { (number | string | BN) } role,
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "getRoleAdmin"(role: (number | string | BN), __options?: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * renounceRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
    */
    "renounceRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError>>>;
    /**
    * revokeRole
    *
    * @param { (number | string | BN) } role,
    * @param { ArgumentTypes.AccountId | null } account,
    * @returns { Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError> }
    */
    "revokeRole"(role: (number | string | BN), account: ArgumentTypes.AccountId | null, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.AccessControlError>, ReturnTypes.LangError>>>;
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError> }
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError>>>;
}
