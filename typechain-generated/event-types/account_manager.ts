import type {ReturnNumber} from "@727-ventures/typechain-types";
import type * as ReturnTypes from '../types-returns/account_manager';

export interface AccountCreated {
	accountId: ReturnTypes.AccountId;
	contractId: ReturnTypes.AccountId;
}

export interface CreatorAccountCreated {
	accountId: ReturnTypes.AccountId;
	contractId: ReturnTypes.AccountId;
}

export interface UserCodeHashSet {
	codeHash: ReturnTypes.Hash;
}

export interface CreatorCodeHashSet {
	codeHash: ReturnTypes.Hash;
}

export interface AdminAdded {
	caller: ReturnTypes.AccountId;
	accountId: ReturnTypes.AccountId;
}

export interface AdminRemoved {
	caller: ReturnTypes.AccountId;
	accountId: ReturnTypes.AccountId;
}

