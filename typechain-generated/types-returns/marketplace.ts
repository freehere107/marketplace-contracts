import type BN from 'bn.js';
import type {ReturnNumber} from '@727-ventures/typechain-types';

export type AccountId = string | number[]

export enum LangError {
	couldNotReadInput = 'CouldNotReadInput'
}

export interface Id {
	u8 ? : number,
	u16 ? : number,
	u32 ? : number,
	u64 ? : number,
	u128 ? : ReturnNumber,
	bytes ? : Array<number>
}

export class IdBuilder {
	static U8(value: number): Id {
		return {
			u8: value,
		};
	}
	static U16(value: number): Id {
		return {
			u16: value,
		};
	}
	static U32(value: number): Id {
		return {
			u32: value,
		};
	}
	static U64(value: number): Id {
		return {
			u64: value,
		};
	}
	static U128(value: ReturnNumber): Id {
		return {
			u128: value,
		};
	}
	static Bytes(value: Array<number>): Id {
		return {
			bytes: value,
		};
	}
}

export interface Currency {
	native ? : null,
	custom ? : AccountId
}

export class CurrencyBuilder {
	static Native(): Currency {
		return {
			native: null,
		};
	}
	static Custom(value: AccountId): Currency {
		return {
			custom: value,
		};
	}
}

export interface ArchisinalError {
	accountAlreadyExists ? : null,
	insufficientFunds ? : null,
	auctionPriceIsZero ? : null,
	auctionEndTimeIsBeforeStartTime ? : null,
	collectionOwnerNotFound ? : null,
	auctionHasNoBids ? : null,
	auctionNotEnded ? : null,
	bidPriceTooLow ? : null,
	auctionEnded ? : null,
	auctionNotStarted ? : null,
	auctionNotInAuction ? : null,
	listingNotOnSale ? : null,
	auctionNotWaiting ? : null,
	callerIsNotAuctionOwner ? : null,
	callerIsListingOwner ? : null,
	callerIsNotListingOwner ? : null,
	auctionNotFound ? : null,
	listingNotFound ? : null,
	integerOverflow ? : null,
	integerUnderflow ? : null,
	collectionNotFound ? : null,
	callerIsNotNftOwner ? : null,
	transferNativeError ? : null,
	ownable ? : OwnableError,
	psp34 ? : PSP34Error,
	psp22 ? : PSP22Error,
	other ? : string
}

export class ArchisinalErrorBuilder {
	static AccountAlreadyExists(): ArchisinalError {
		return {
			accountAlreadyExists: null,
		};
	}
	static InsufficientFunds(): ArchisinalError {
		return {
			insufficientFunds: null,
		};
	}
	static AuctionPriceIsZero(): ArchisinalError {
		return {
			auctionPriceIsZero: null,
		};
	}
	static AuctionEndTimeIsBeforeStartTime(): ArchisinalError {
		return {
			auctionEndTimeIsBeforeStartTime: null,
		};
	}
	static CollectionOwnerNotFound(): ArchisinalError {
		return {
			collectionOwnerNotFound: null,
		};
	}
	static AuctionHasNoBids(): ArchisinalError {
		return {
			auctionHasNoBids: null,
		};
	}
	static AuctionNotEnded(): ArchisinalError {
		return {
			auctionNotEnded: null,
		};
	}
	static BidPriceTooLow(): ArchisinalError {
		return {
			bidPriceTooLow: null,
		};
	}
	static AuctionEnded(): ArchisinalError {
		return {
			auctionEnded: null,
		};
	}
	static AuctionNotStarted(): ArchisinalError {
		return {
			auctionNotStarted: null,
		};
	}
	static AuctionNotInAuction(): ArchisinalError {
		return {
			auctionNotInAuction: null,
		};
	}
	static ListingNotOnSale(): ArchisinalError {
		return {
			listingNotOnSale: null,
		};
	}
	static AuctionNotWaiting(): ArchisinalError {
		return {
			auctionNotWaiting: null,
		};
	}
	static CallerIsNotAuctionOwner(): ArchisinalError {
		return {
			callerIsNotAuctionOwner: null,
		};
	}
	static CallerIsListingOwner(): ArchisinalError {
		return {
			callerIsListingOwner: null,
		};
	}
	static CallerIsNotListingOwner(): ArchisinalError {
		return {
			callerIsNotListingOwner: null,
		};
	}
	static AuctionNotFound(): ArchisinalError {
		return {
			auctionNotFound: null,
		};
	}
	static ListingNotFound(): ArchisinalError {
		return {
			listingNotFound: null,
		};
	}
	static IntegerOverflow(): ArchisinalError {
		return {
			integerOverflow: null,
		};
	}
	static IntegerUnderflow(): ArchisinalError {
		return {
			integerUnderflow: null,
		};
	}
	static CollectionNotFound(): ArchisinalError {
		return {
			collectionNotFound: null,
		};
	}
	static CallerIsNotNFTOwner(): ArchisinalError {
		return {
			callerIsNotNftOwner: null,
		};
	}
	static TransferNativeError(): ArchisinalError {
		return {
			transferNativeError: null,
		};
	}
	static Ownable(value: OwnableError): ArchisinalError {
		return {
			ownable: value,
		};
	}
	static PSP34(value: PSP34Error): ArchisinalError {
		return {
			psp34: value,
		};
	}
	static PSP22(value: PSP22Error): ArchisinalError {
		return {
			psp22: value,
		};
	}
	static Other(value: string): ArchisinalError {
		return {
			other: value,
		};
	}
}

export enum OwnableError {
	callerIsNotOwner = 'CallerIsNotOwner',
	newOwnerIsZero = 'NewOwnerIsZero'
}

export interface PSP34Error {
	custom ? : string,
	selfApprove ? : null,
	notApproved ? : null,
	tokenExists ? : null,
	tokenNotExists ? : null,
	safeTransferCheckFailed ? : string
}

export class PSP34ErrorBuilder {
	static Custom(value: string): PSP34Error {
		return {
			custom: value,
		};
	}
	static SelfApprove(): PSP34Error {
		return {
			selfApprove: null,
		};
	}
	static NotApproved(): PSP34Error {
		return {
			notApproved: null,
		};
	}
	static TokenExists(): PSP34Error {
		return {
			tokenExists: null,
		};
	}
	static TokenNotExists(): PSP34Error {
		return {
			tokenNotExists: null,
		};
	}
	static SafeTransferCheckFailed(value: string): PSP34Error {
		return {
			safeTransferCheckFailed: value,
		};
	}
}

export interface PSP22Error {
	custom ? : string,
	insufficientBalance ? : null,
	insufficientAllowance ? : null,
	zeroRecipientAddress ? : null,
	zeroSenderAddress ? : null,
	safeTransferCheckFailed ? : string
}

export class PSP22ErrorBuilder {
	static Custom(value: string): PSP22Error {
		return {
			custom: value,
		};
	}
	static InsufficientBalance(): PSP22Error {
		return {
			insufficientBalance: null,
		};
	}
	static InsufficientAllowance(): PSP22Error {
		return {
			insufficientAllowance: null,
		};
	}
	static ZeroRecipientAddress(): PSP22Error {
		return {
			zeroRecipientAddress: null,
		};
	}
	static ZeroSenderAddress(): PSP22Error {
		return {
			zeroSenderAddress: null,
		};
	}
	static SafeTransferCheckFailed(value: string): PSP22Error {
		return {
			safeTransferCheckFailed: value,
		};
	}
}

export type Listing = {
	id: ReturnNumber,
	creator: AccountId,
	collection: AccountId,
	tokenId: Id,
	price: ReturnNumber,
	currency: Currency,
	status: ListingStatus
}

export enum ListingStatus {
	onSale = 'OnSale',
	sold = 'Sold',
	cancelled = 'Cancelled'
}

export type Auction = {
	id: ReturnNumber,
	creator: AccountId,
	collection: AccountId,
	tokenId: Id,
	startPrice: ReturnNumber,
	minBidStep: ReturnNumber,
	currency: Currency,
	startTime: number,
	endTime: number,
	currentPrice: ReturnNumber,
	currentBidder: AccountId | null,
	status: AuctionStatus
}

export enum AuctionStatus {
	waitingAuction = 'WaitingAuction',
	inAuction = 'InAuction',
	waitingForClaim = 'WaitingForClaim',
	ended = 'Ended',
	cancelled = 'Cancelled'
}

