import type * as ReturnTypes from '../types-returns/creator';
export interface CollectionCreated {
    creator: ReturnTypes.AccountId;
    collection: ReturnTypes.AccountId;
    index: number;
}
export interface UserDataSet {
    userData: ReturnTypes.UserData;
}
