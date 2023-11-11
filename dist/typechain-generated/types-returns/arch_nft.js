"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeableErrorBuilder = exports.PSP22ErrorBuilder = exports.PSP34ErrorBuilder = exports.AccessControlError = exports.OwnableError = exports.ArchisinalErrorBuilder = exports.IdBuilder = exports.LangError = void 0;
var LangError;
(function (LangError) {
    LangError["couldNotReadInput"] = "CouldNotReadInput";
})(LangError = exports.LangError || (exports.LangError = {}));
class IdBuilder {
    static U8(value) {
        return {
            u8: value,
        };
    }
    static U16(value) {
        return {
            u16: value,
        };
    }
    static U32(value) {
        return {
            u32: value,
        };
    }
    static U64(value) {
        return {
            u64: value,
        };
    }
    static U128(value) {
        return {
            u128: value,
        };
    }
    static Bytes(value) {
        return {
            bytes: value,
        };
    }
}
exports.IdBuilder = IdBuilder;
class ArchisinalErrorBuilder {
    static NoOwner() {
        return {
            noOwner: null,
        };
    }
    static AdminAccessError() {
        return {
            adminAccessError: null,
        };
    }
    static AuctionMinBidStepIsZero() {
        return {
            auctionMinBidStepIsZero: null,
        };
    }
    static CreatorIsNotCaller() {
        return {
            creatorIsNotCaller: null,
        };
    }
    static AuctionStartTimeIsBeforeNow() {
        return {
            auctionStartTimeIsBeforeNow: null,
        };
    }
    static CallerIsAuctionOwner() {
        return {
            callerIsAuctionOwner: null,
        };
    }
    static AccountAlreadyExists() {
        return {
            accountAlreadyExists: null,
        };
    }
    static InsufficientFunds() {
        return {
            insufficientFunds: null,
        };
    }
    static AuctionPriceIsZero() {
        return {
            auctionPriceIsZero: null,
        };
    }
    static AuctionEndTimeIsBeforeStartTime() {
        return {
            auctionEndTimeIsBeforeStartTime: null,
        };
    }
    static CollectionOwnerNotFound() {
        return {
            collectionOwnerNotFound: null,
        };
    }
    static AuctionHasNoBids() {
        return {
            auctionHasNoBids: null,
        };
    }
    static AuctionNotEnded() {
        return {
            auctionNotEnded: null,
        };
    }
    static BidPriceTooLow() {
        return {
            bidPriceTooLow: null,
        };
    }
    static AuctionEnded() {
        return {
            auctionEnded: null,
        };
    }
    static AuctionNotStarted() {
        return {
            auctionNotStarted: null,
        };
    }
    static AuctionNotInAuction() {
        return {
            auctionNotInAuction: null,
        };
    }
    static ListingNotOnSale() {
        return {
            listingNotOnSale: null,
        };
    }
    static AuctionNotWaiting() {
        return {
            auctionNotWaiting: null,
        };
    }
    static CallerIsNotAuctionOwner() {
        return {
            callerIsNotAuctionOwner: null,
        };
    }
    static CallerIsListingOwner() {
        return {
            callerIsListingOwner: null,
        };
    }
    static CallerIsNotListingOwner() {
        return {
            callerIsNotListingOwner: null,
        };
    }
    static AuctionNotFound() {
        return {
            auctionNotFound: null,
        };
    }
    static ListingNotFound() {
        return {
            listingNotFound: null,
        };
    }
    static IntegerOverflow() {
        return {
            integerOverflow: null,
        };
    }
    static IntegerUnderflow() {
        return {
            integerUnderflow: null,
        };
    }
    static CollectionNotFound() {
        return {
            collectionNotFound: null,
        };
    }
    static CallerIsNotNFTOwner() {
        return {
            callerIsNotNftOwner: null,
        };
    }
    static TransferNativeError() {
        return {
            transferNativeError: null,
        };
    }
    static Ownable(value) {
        return {
            ownable: value,
        };
    }
    static AccessControl(value) {
        return {
            accessControl: value,
        };
    }
    static PSP34(value) {
        return {
            psp34: value,
        };
    }
    static PSP22(value) {
        return {
            psp22: value,
        };
    }
    static Other(value) {
        return {
            other: value,
        };
    }
}
exports.ArchisinalErrorBuilder = ArchisinalErrorBuilder;
var OwnableError;
(function (OwnableError) {
    OwnableError["callerIsNotOwner"] = "CallerIsNotOwner";
    OwnableError["newOwnerIsZero"] = "NewOwnerIsZero";
})(OwnableError = exports.OwnableError || (exports.OwnableError = {}));
var AccessControlError;
(function (AccessControlError) {
    AccessControlError["invalidCaller"] = "InvalidCaller";
    AccessControlError["missingRole"] = "MissingRole";
    AccessControlError["roleRedundant"] = "RoleRedundant";
})(AccessControlError = exports.AccessControlError || (exports.AccessControlError = {}));
class PSP34ErrorBuilder {
    static Custom(value) {
        return {
            custom: value,
        };
    }
    static SelfApprove() {
        return {
            selfApprove: null,
        };
    }
    static NotApproved() {
        return {
            notApproved: null,
        };
    }
    static TokenExists() {
        return {
            tokenExists: null,
        };
    }
    static TokenNotExists() {
        return {
            tokenNotExists: null,
        };
    }
    static SafeTransferCheckFailed(value) {
        return {
            safeTransferCheckFailed: value,
        };
    }
}
exports.PSP34ErrorBuilder = PSP34ErrorBuilder;
class PSP22ErrorBuilder {
    static Custom(value) {
        return {
            custom: value,
        };
    }
    static InsufficientBalance() {
        return {
            insufficientBalance: null,
        };
    }
    static InsufficientAllowance() {
        return {
            insufficientAllowance: null,
        };
    }
    static ZeroRecipientAddress() {
        return {
            zeroRecipientAddress: null,
        };
    }
    static ZeroSenderAddress() {
        return {
            zeroSenderAddress: null,
        };
    }
    static SafeTransferCheckFailed(value) {
        return {
            safeTransferCheckFailed: value,
        };
    }
}
exports.PSP22ErrorBuilder = PSP22ErrorBuilder;
class UpgradeableErrorBuilder {
    static Custom(value) {
        return {
            custom: value,
        };
    }
    static SetCodeHashFailed() {
        return {
            setCodeHashFailed: null,
        };
    }
    static OwnableError(value) {
        return {
            ownableError: value,
        };
    }
    static AccessControlError(value) {
        return {
            accessControlError: value,
        };
    }
}
exports.UpgradeableErrorBuilder = UpgradeableErrorBuilder;
//# sourceMappingURL=arch_nft.js.map