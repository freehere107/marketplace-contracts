import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { KeyringPair } from '@polkadot/keyring/types';
import type { GasLimit, Result, ExternalSigner } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/arch_nft';
import type * as ReturnTypes from '../types-returns/arch_nft';
import type BN from 'bn.js';
import { ReturnNumber } from '@727-ventures/typechain-types';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __keyringPair: KeyringPair | ExternalSigner;
    readonly __callerAddress: string;
    readonly __apiPromise: ApiPromise;
    constructor(apiPromise: ApiPromise, nativeContract: ContractPromise, keyringPair: KeyringPair | ExternalSigner);
    /**
    * accountId
    *
    * @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
    */
    "accountId"(__options: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId, ReturnTypes.LangError>>>;
    /**
    * collectionAdditionalInfo
    *
    * @returns { Result<string | null, ReturnTypes.LangError> }
    */
    "collectionAdditionalInfo"(__options: GasLimit): Promise<QueryReturnType<Result<string | null, ReturnTypes.LangError>>>;
    /**
    * updateNftMetadata
    *
    * @param { ArgumentTypes.Id } id,
    * @param { ArgumentTypes.NftMetadata } metadata,
    * @returns { void }
    */
    "updateNftMetadata"(id: ArgumentTypes.Id, metadata: ArgumentTypes.NftMetadata, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * getNftMetadata
    *
    * @param { ArgumentTypes.Id } id,
    * @returns { Result<ReturnTypes.NftMetadata | null, ReturnTypes.LangError> }
    */
    "getNftMetadata"(id: ArgumentTypes.Id, __options: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.NftMetadata | null, ReturnTypes.LangError>>>;
    /**
    * setCollectionName
    *
    * @param { string } name,
    * @returns { void }
    */
    "setCollectionName"(name: string, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * collectionName
    *
    * @returns { Result<string | null, ReturnTypes.LangError> }
    */
    "collectionName"(__options: GasLimit): Promise<QueryReturnType<Result<string | null, ReturnTypes.LangError>>>;
    /**
    * collectionRoyalty
    *
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "collectionRoyalty"(__options: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * setCollectionAdditionalInfo
    *
    * @param { string } additionalInfo,
    * @returns { void }
    */
    "setCollectionAdditionalInfo"(additionalInfo: string, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * collectionUri
    *
    * @returns { Result<string | null, ReturnTypes.LangError> }
    */
    "collectionUri"(__options: GasLimit): Promise<QueryReturnType<Result<string | null, ReturnTypes.LangError>>>;
    /**
    * setCollectionUri
    *
    * @param { string } uri,
    * @returns { void }
    */
    "setCollectionUri"(uri: string, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { void }
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * renounceOwnership
    *
    * @returns { void }
    */
    "renounceOwnership"(__options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * approve
    *
    * @param { ArgumentTypes.AccountId } operator,
    * @param { ArgumentTypes.Id | null } id,
    * @param { boolean } approved,
    * @returns { void }
    */
    "approve"(operator: ArgumentTypes.AccountId, id: ArgumentTypes.Id | null, approved: boolean, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * collectionId
    *
    * @returns { Result<ReturnTypes.Id, ReturnTypes.LangError> }
    */
    "collectionId"(__options: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.Id, ReturnTypes.LangError>>>;
    /**
    * ownerOf
    *
    * @param { ArgumentTypes.Id } id,
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "ownerOf"(id: ArgumentTypes.Id, __options: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * allowance
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.AccountId } operator,
    * @param { ArgumentTypes.Id | null } id,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "allowance"(owner: ArgumentTypes.AccountId, operator: ArgumentTypes.AccountId, id: ArgumentTypes.Id | null, __options: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * balanceOf
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "balanceOf"(owner: ArgumentTypes.AccountId, __options: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * transfer
    *
    * @param { ArgumentTypes.AccountId } to,
    * @param { ArgumentTypes.Id } id,
    * @param { Array<(number | string | BN)> } data,
    * @returns { void }
    */
    "transfer"(to: ArgumentTypes.AccountId, id: ArgumentTypes.Id, data: Array<(number | string | BN)>, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * totalSupply
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "totalSupply"(__options: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * mint
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { ArgumentTypes.Id } id,
    * @returns { void }
    */
    "mint"(account: ArgumentTypes.AccountId, id: ArgumentTypes.Id, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * burn
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { ArgumentTypes.Id } id,
    * @returns { void }
    */
    "burn"(account: ArgumentTypes.AccountId, id: ArgumentTypes.Id, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { void }
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options: GasLimit): Promise<import("@727-ventures/typechain-types/dist/src/tx").SignAndSendSuccessResponse>;
}
