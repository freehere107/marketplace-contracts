import type {ReturnNumber} from "@archisinal/typechain-types";
import type * as ReturnTypes from '../types-returns/collection_fabric';

export interface AdminAdded {
	caller: ReturnTypes.AccountId;
	accountId: ReturnTypes.AccountId;
}

export interface AdminRemoved {
	caller: ReturnTypes.AccountId;
	accountId: ReturnTypes.AccountId;
}

export interface CollectionInstantiated {
	collection: ReturnTypes.AccountId;
	index: ReturnNumber;
}

export interface CollectionBanned {
	collection: ReturnTypes.AccountId;
}

export interface CollectionUnbanned {
	collection: ReturnTypes.AccountId;
}

export interface CodehashBanned {
	codeHash: ReturnTypes.Hash;
}

export interface CodehashUnbanned {
	codeHash: ReturnTypes.Hash;
}

export interface CollectionWhiteListed {
	collection: ReturnTypes.AccountId;
}

export interface CollectionUnWhiteListed {
	collection: ReturnTypes.AccountId;
}

export interface WhitelistEnabled {
	enabled: boolean;
}

