import type BN from 'bn.js';
export type AccountId = string | number[];
export declare enum LangError {
    couldNotReadInput = "CouldNotReadInput"
}
export type UserData = {
    nick: string | null;
    avatar: NFT | null;
    additionInfo: string | null;
};
export type NFT = {
    id: Id;
    uri: string;
    contractAddress: string;
};
export interface Id {
    u8?: (number | string | BN);
    u16?: (number | string | BN);
    u32?: (number | string | BN);
    u64?: (number | string | BN);
    u128?: (string | number | BN);
    bytes?: Array<(number | string | BN)>;
}
export declare class IdBuilder {
    static U8(value: (number | string | BN)): Id;
    static U16(value: (number | string | BN)): Id;
    static U32(value: (number | string | BN)): Id;
    static U64(value: (number | string | BN)): Id;
    static U128(value: (string | number | BN)): Id;
    static Bytes(value: Array<(number | string | BN)>): Id;
}
export interface ArchisinalError {
    noOwner?: null;
    adminAccessError?: null;
    auctionMinBidStepIsZero?: null;
    creatorIsNotCaller?: null;
    auctionStartTimeIsBeforeNow?: null;
    callerIsAuctionOwner?: null;
    accountAlreadyExists?: null;
    insufficientFunds?: null;
    auctionPriceIsZero?: null;
    auctionEndTimeIsBeforeStartTime?: null;
    collectionOwnerNotFound?: null;
    auctionHasNoBids?: null;
    auctionNotEnded?: null;
    bidPriceTooLow?: null;
    auctionEnded?: null;
    auctionNotStarted?: null;
    auctionNotInAuction?: null;
    listingNotOnSale?: null;
    auctionNotWaiting?: null;
    callerIsNotAuctionOwner?: null;
    callerIsListingOwner?: null;
    callerIsNotListingOwner?: null;
    auctionNotFound?: null;
    listingNotFound?: null;
    integerOverflow?: null;
    integerUnderflow?: null;
    collectionNotFound?: null;
    callerIsNotNftOwner?: null;
    transferNativeError?: null;
    ownable?: OwnableError;
    accessControl?: AccessControlError;
    psp34?: PSP34Error;
    psp22?: PSP22Error;
    other?: string;
}
export declare class ArchisinalErrorBuilder {
    static NoOwner(): ArchisinalError;
    static AdminAccessError(): ArchisinalError;
    static AuctionMinBidStepIsZero(): ArchisinalError;
    static CreatorIsNotCaller(): ArchisinalError;
    static AuctionStartTimeIsBeforeNow(): ArchisinalError;
    static CallerIsAuctionOwner(): ArchisinalError;
    static AccountAlreadyExists(): ArchisinalError;
    static InsufficientFunds(): ArchisinalError;
    static AuctionPriceIsZero(): ArchisinalError;
    static AuctionEndTimeIsBeforeStartTime(): ArchisinalError;
    static CollectionOwnerNotFound(): ArchisinalError;
    static AuctionHasNoBids(): ArchisinalError;
    static AuctionNotEnded(): ArchisinalError;
    static BidPriceTooLow(): ArchisinalError;
    static AuctionEnded(): ArchisinalError;
    static AuctionNotStarted(): ArchisinalError;
    static AuctionNotInAuction(): ArchisinalError;
    static ListingNotOnSale(): ArchisinalError;
    static AuctionNotWaiting(): ArchisinalError;
    static CallerIsNotAuctionOwner(): ArchisinalError;
    static CallerIsListingOwner(): ArchisinalError;
    static CallerIsNotListingOwner(): ArchisinalError;
    static AuctionNotFound(): ArchisinalError;
    static ListingNotFound(): ArchisinalError;
    static IntegerOverflow(): ArchisinalError;
    static IntegerUnderflow(): ArchisinalError;
    static CollectionNotFound(): ArchisinalError;
    static CallerIsNotNFTOwner(): ArchisinalError;
    static TransferNativeError(): ArchisinalError;
    static Ownable(value: OwnableError): ArchisinalError;
    static AccessControl(value: AccessControlError): ArchisinalError;
    static PSP34(value: PSP34Error): ArchisinalError;
    static PSP22(value: PSP22Error): ArchisinalError;
    static Other(value: string): ArchisinalError;
}
export declare enum OwnableError {
    callerIsNotOwner = "CallerIsNotOwner",
    newOwnerIsZero = "NewOwnerIsZero"
}
export declare enum AccessControlError {
    invalidCaller = "InvalidCaller",
    missingRole = "MissingRole",
    roleRedundant = "RoleRedundant"
}
export interface PSP34Error {
    custom?: string;
    selfApprove?: null;
    notApproved?: null;
    tokenExists?: null;
    tokenNotExists?: null;
    safeTransferCheckFailed?: string;
}
export declare class PSP34ErrorBuilder {
    static Custom(value: string): PSP34Error;
    static SelfApprove(): PSP34Error;
    static NotApproved(): PSP34Error;
    static TokenExists(): PSP34Error;
    static TokenNotExists(): PSP34Error;
    static SafeTransferCheckFailed(value: string): PSP34Error;
}
export interface PSP22Error {
    custom?: string;
    insufficientBalance?: null;
    insufficientAllowance?: null;
    zeroRecipientAddress?: null;
    zeroSenderAddress?: null;
    safeTransferCheckFailed?: string;
}
export declare class PSP22ErrorBuilder {
    static Custom(value: string): PSP22Error;
    static InsufficientBalance(): PSP22Error;
    static InsufficientAllowance(): PSP22Error;
    static ZeroRecipientAddress(): PSP22Error;
    static ZeroSenderAddress(): PSP22Error;
    static SafeTransferCheckFailed(value: string): PSP22Error;
}
export type Hash = string | number[];
export interface UpgradeableError {
    custom?: string;
    setCodeHashFailed?: null;
    ownableError?: OwnableError;
    accessControlError?: AccessControlError;
}
export declare class UpgradeableErrorBuilder {
    static Custom(value: string): UpgradeableError;
    static SetCodeHashFailed(): UpgradeableError;
    static OwnableError(value: OwnableError): UpgradeableError;
    static AccessControlError(value: AccessControlError): UpgradeableError;
}
