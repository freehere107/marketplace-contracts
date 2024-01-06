import type {ReturnNumber} from "@archisinal/typechain-types";
import type * as ReturnTypes from '../types-returns/arch_nft';

export interface Transfer {
	from: ReturnTypes.AccountId | null;
	to: ReturnTypes.AccountId | null;
	tokenId: ReturnTypes.Id;
}

export interface Approval {
	owner: ReturnTypes.AccountId;
	spender: ReturnTypes.AccountId;
	tokenId: ReturnTypes.Id | null;
	approved: boolean;
}

export interface SetCollectionName {
	name: string;
}

export interface SetCollectionUri {
	uri: string;
}

export interface SetCollectionAdditionalInfo {
	additionalInfo: string;
}

export interface NFTMetadataSet {
	id: ReturnTypes.Id;
	value: ReturnTypes.NftMetadata;
}

