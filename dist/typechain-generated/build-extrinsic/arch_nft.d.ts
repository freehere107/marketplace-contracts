import type { ContractPromise } from '@polkadot/api-contract';
import type { GasLimit } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/arch_nft';
import type BN from 'bn.js';
import type { ApiPromise } from '@polkadot/api';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __apiPromise: ApiPromise;
    constructor(nativeContract: ContractPromise, apiPromise: ApiPromise);
    /**
     * accountId
     *
    */
    "accountId"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * collectionName
     *
    */
    "collectionName"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * setCollectionAdditionalInfo
     *
     * @param { string } additionalInfo,
    */
    "setCollectionAdditionalInfo"(additionalInfo: string, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * collectionUri
     *
    */
    "collectionUri"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * setCollectionName
     *
     * @param { string } name,
    */
    "setCollectionName"(name: string, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * collectionAdditionalInfo
     *
    */
    "collectionAdditionalInfo"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * setCollectionUri
     *
     * @param { string } uri,
    */
    "setCollectionUri"(uri: string, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * collectionRoyalty
     *
    */
    "collectionRoyalty"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * setAttribute
     *
     * @param { ArgumentTypes.Id } id,
     * @param { string } key,
     * @param { string } value,
    */
    "setAttribute"(id: ArgumentTypes.Id, key: string, value: string, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * owner
     *
    */
    "owner"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * renounceOwnership
     *
    */
    "renounceOwnership"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * transferOwnership
     *
     * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * transfer
     *
     * @param { ArgumentTypes.AccountId } to,
     * @param { ArgumentTypes.Id } id,
     * @param { Array<(number | string | BN)> } data,
    */
    "transfer"(to: ArgumentTypes.AccountId, id: ArgumentTypes.Id, data: Array<(number | string | BN)>, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * totalSupply
     *
    */
    "totalSupply"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * ownerOf
     *
     * @param { ArgumentTypes.Id } id,
    */
    "ownerOf"(id: ArgumentTypes.Id, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * collectionId
     *
    */
    "collectionId"(__options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * balanceOf
     *
     * @param { ArgumentTypes.AccountId } owner,
    */
    "balanceOf"(owner: ArgumentTypes.AccountId, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * approve
     *
     * @param { ArgumentTypes.AccountId } operator,
     * @param { ArgumentTypes.Id | null } id,
     * @param { boolean } approved,
    */
    "approve"(operator: ArgumentTypes.AccountId, id: ArgumentTypes.Id | null, approved: boolean, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * allowance
     *
     * @param { ArgumentTypes.AccountId } owner,
     * @param { ArgumentTypes.AccountId } operator,
     * @param { ArgumentTypes.Id | null } id,
    */
    "allowance"(owner: ArgumentTypes.AccountId, operator: ArgumentTypes.AccountId, id: ArgumentTypes.Id | null, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * mint
     *
     * @param { ArgumentTypes.AccountId } account,
     * @param { ArgumentTypes.Id } id,
    */
    "mint"(account: ArgumentTypes.AccountId, id: ArgumentTypes.Id, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * burn
     *
     * @param { ArgumentTypes.AccountId } account,
     * @param { ArgumentTypes.Id } id,
    */
    "burn"(account: ArgumentTypes.AccountId, id: ArgumentTypes.Id, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * getAttribute
     *
     * @param { ArgumentTypes.Id } id,
     * @param { string } key,
    */
    "getAttribute"(id: ArgumentTypes.Id, key: string, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
    /**
     * setCodeHash
     *
     * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options: GasLimit): import("@polkadot/api-base/types").SubmittableExtrinsic<"promise", import("@polkadot/types/types").ISubmittableResult>;
}
