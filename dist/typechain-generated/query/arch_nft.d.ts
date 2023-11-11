import type { ContractPromise } from '@polkadot/api-contract';
import type { ApiPromise } from '@polkadot/api';
import type { GasLimit, Result } from '@727-ventures/typechain-types';
import type { QueryReturnType } from '@727-ventures/typechain-types';
import type * as ArgumentTypes from '../types-arguments/arch_nft';
import type * as ReturnTypes from '../types-returns/arch_nft';
import type BN from 'bn.js';
import { ReturnNumber } from '@727-ventures/typechain-types';
export default class Methods {
    readonly __nativeContract: ContractPromise;
    readonly __apiPromise: ApiPromise;
    readonly __callerAddress: string;
    constructor(nativeContract: ContractPromise, nativeApi: ApiPromise, callerAddress: string);
    /**
    * accountId
    *
    * @returns { Result<ReturnTypes.AccountId, ReturnTypes.LangError> }
    */
    "accountId"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId, ReturnTypes.LangError>>>;
    /**
    * collectionName
    *
    * @returns { Result<string | null, ReturnTypes.LangError> }
    */
    "collectionName"(__options?: GasLimit): Promise<QueryReturnType<Result<string | null, ReturnTypes.LangError>>>;
    /**
    * setAttribute
    *
    * @param { ArgumentTypes.Id } id,
    * @param { string } key,
    * @param { string } value,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "setAttribute"(id: ArgumentTypes.Id, key: string, value: string, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * setCollectionUri
    *
    * @param { string } uri,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "setCollectionUri"(uri: string, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * collectionRoyalty
    *
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "collectionRoyalty"(__options?: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * setCollectionAdditionalInfo
    *
    * @param { string } additionalInfo,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "setCollectionAdditionalInfo"(additionalInfo: string, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * collectionAdditionalInfo
    *
    * @returns { Result<string | null, ReturnTypes.LangError> }
    */
    "collectionAdditionalInfo"(__options?: GasLimit): Promise<QueryReturnType<Result<string | null, ReturnTypes.LangError>>>;
    /**
    * collectionUri
    *
    * @returns { Result<string | null, ReturnTypes.LangError> }
    */
    "collectionUri"(__options?: GasLimit): Promise<QueryReturnType<Result<string | null, ReturnTypes.LangError>>>;
    /**
    * setCollectionName
    *
    * @param { string } name,
    * @returns { Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError> }
    */
    "setCollectionName"(name: string, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.ArchisinalError>, ReturnTypes.LangError>>>;
    /**
    * transferOwnership
    *
    * @param { ArgumentTypes.AccountId } newOwner,
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "transferOwnership"(newOwner: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError>>>;
    /**
    * renounceOwnership
    *
    * @returns { Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError> }
    */
    "renounceOwnership"(__options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.OwnableError>, ReturnTypes.LangError>>>;
    /**
    * owner
    *
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "owner"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * ownerOf
    *
    * @param { ArgumentTypes.Id } id,
    * @returns { Result<ReturnTypes.AccountId | null, ReturnTypes.LangError> }
    */
    "ownerOf"(id: ArgumentTypes.Id, __options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.AccountId | null, ReturnTypes.LangError>>>;
    /**
    * approve
    *
    * @param { ArgumentTypes.AccountId } operator,
    * @param { ArgumentTypes.Id | null } id,
    * @param { boolean } approved,
    * @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
    */
    "approve"(operator: ArgumentTypes.AccountId, id: ArgumentTypes.Id | null, approved: boolean, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>>;
    /**
    * allowance
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { ArgumentTypes.AccountId } operator,
    * @param { ArgumentTypes.Id | null } id,
    * @returns { Result<boolean, ReturnTypes.LangError> }
    */
    "allowance"(owner: ArgumentTypes.AccountId, operator: ArgumentTypes.AccountId, id: ArgumentTypes.Id | null, __options?: GasLimit): Promise<QueryReturnType<Result<boolean, ReturnTypes.LangError>>>;
    /**
    * transfer
    *
    * @param { ArgumentTypes.AccountId } to,
    * @param { ArgumentTypes.Id } id,
    * @param { Array<(number | string | BN)> } data,
    * @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
    */
    "transfer"(to: ArgumentTypes.AccountId, id: ArgumentTypes.Id, data: Array<(number | string | BN)>, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>>;
    /**
    * balanceOf
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @returns { Result<number, ReturnTypes.LangError> }
    */
    "balanceOf"(owner: ArgumentTypes.AccountId, __options?: GasLimit): Promise<QueryReturnType<Result<number, ReturnTypes.LangError>>>;
    /**
    * totalSupply
    *
    * @returns { Result<ReturnNumber, ReturnTypes.LangError> }
    */
    "totalSupply"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnNumber, ReturnTypes.LangError>>>;
    /**
    * collectionId
    *
    * @returns { Result<ReturnTypes.Id, ReturnTypes.LangError> }
    */
    "collectionId"(__options?: GasLimit): Promise<QueryReturnType<Result<ReturnTypes.Id, ReturnTypes.LangError>>>;
    /**
    * mint
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { ArgumentTypes.Id } id,
    * @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
    */
    "mint"(account: ArgumentTypes.AccountId, id: ArgumentTypes.Id, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>>;
    /**
    * burn
    *
    * @param { ArgumentTypes.AccountId } account,
    * @param { ArgumentTypes.Id } id,
    * @returns { Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError> }
    */
    "burn"(account: ArgumentTypes.AccountId, id: ArgumentTypes.Id, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.PSP34Error>, ReturnTypes.LangError>>>;
    /**
    * getAttribute
    *
    * @param { ArgumentTypes.Id } id,
    * @param { string } key,
    * @returns { Result<string | null, ReturnTypes.LangError> }
    */
    "getAttribute"(id: ArgumentTypes.Id, key: string, __options?: GasLimit): Promise<QueryReturnType<Result<string | null, ReturnTypes.LangError>>>;
    /**
    * setCodeHash
    *
    * @param { ArgumentTypes.Hash } newCodeHash,
    * @returns { Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError> }
    */
    "setCodeHash"(newCodeHash: ArgumentTypes.Hash, __options?: GasLimit): Promise<QueryReturnType<Result<Result<null, ReturnTypes.UpgradeableError>, ReturnTypes.LangError>>>;
}
