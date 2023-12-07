import type { ContractPromise } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, ExternalSigner } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/arch_nft';
import type BN from 'bn.js';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __keyringPair: KeyringPair | ExternalSigner;
    readonly __apiPromise: ApiPromise;
    constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair | ExternalSigner);
    /**
    * accountId
    *
    */
    "accountId"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * collectionAdditionalInfo
    *
    */
    "collectionAdditionalInfo"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * updateNftMetadata
    *
    * @param { ArgumentTypes.Id } id,
    * @param { ArgumentTypes.NftMetadata } metadata,
    */
    "updateNftMetadata"(id: ArgumentTypes.Id, metadata: ArgumentTypes.NftMetadata, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * getNftMetadata
    *
    * @param { ArgumentTypes.Id } id,
    */
    "getNftMetadata"(id: ArgumentTypes.Id, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * setCollectionName
    *
    * @param { string } name,
    */
    "setCollectionName"(name: string, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * collectionName
    *
    */
    "collectionName"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * collectionRoyalty
    *
    */
    "collectionRoyalty"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * setCollectionAdditionalInfo
    *
    * @param { string } additionalInfo,
    */
    "setCollectionAdditionalInfo"(additionalInfo: string, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * collectionUri
    *
    */
    "collectionUri"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * setCollectionUri
    *
    * @param { string } uri,
    */
    "setCollectionUri"(uri: string, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * owner
    *
    */
    "owner"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * renounceOwnership
    *
    */
    "renounceOwnership"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * approve
    *
    * @param { ArgumentTypes.AccountId } operator,
    * @param { ArgumentTypes.Id | null } id,
    * @param { boolean } approved,
    */
    "approve"(operator: ArgumentTypes.AccountId, id: ArgumentTypes.Id | null, approved: boolean, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * collectionId
    *
    */
    "collectionId"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * ownerOf
    *
    * @param { ArgumentTypes.Id } id,
    */
    "ownerOf"(id: ArgumentTypes.Id, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * allowance
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.AccountId } operator,
    * @param { ArgumentTypes.Id | null } id,
    */
    "allowance"(owner: ArgumentTypes.AccountId, operator: ArgumentTypes.AccountId, id: ArgumentTypes.Id | null, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * balanceOf
    *
    * @param { ArgumentTypes.AccountId } owner,
    */
    "balanceOf"(owner: ArgumentTypes.AccountId, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * transfer
    *
    * @param { ArgumentTypes.AccountId } to,
    * @param { ArgumentTypes.Id } id,
    * @param { Array<(number | string | BN)> } data,
    */
    "transfer"(to: ArgumentTypes.AccountId, id: ArgumentTypes.Id, data: Array<(number | string | BN)>, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * totalSupply
    *
    */
    "totalSupply"(__options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * mint
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { ArgumentTypes.Id } id,
    */
    "mint"(account: ArgumentTypes.AccountId, id: ArgumentTypes.Id, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * burn
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { ArgumentTypes.Id } id,
    */
    "burn"(account: ArgumentTypes.AccountId, id: ArgumentTypes.Id, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
}
