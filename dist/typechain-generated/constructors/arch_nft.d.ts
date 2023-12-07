import type { KeyringPair } from "@polkadot/keyring/types";
import type { ApiPromise } from "@polkadot/api";
import { SignAndSendSuccessResponse } from "@727-ventures/typechain-types";
import type { ConstructorOptions, ExternalSigner } from "@727-ventures/typechain-types";
import type * as ArgumentTypes from '../types-arguments/arch_nft';
import type BN from 'bn.js';
export default class Constructors {
    readonly nativeAPI: ApiPromise;
    readonly signer: KeyringPair | ExternalSigner;
    constructor(nativeAPI: ApiPromise, signer: KeyringPair | ExternalSigner);
    /**
    * new
    *
    * @param { (number | string | BN) } royalty,
    * @param { string | null } tokenName,
    * @param { string | null } tokenUri,
    * @param { string | null } additionalInfo,
    */
    "new"(royalty: (number | string | BN), tokenName: string | null, tokenUri: string | null, additionalInfo: string | null, __options?: ConstructorOptions): Promise<{
        result: SignAndSendSuccessResponse;
        address: any;
    }>;
    /**
    * newDefault
    *
    * @param { ArgumentTypes.AccountId } owner,
    * @param { (number | string | BN) } royalty,
    * @param { string | null } tokenName,
    * @param { string | null } tokenUri,
    * @param { string | null } additionalInfo,
    */
    "newDefault"(owner: ArgumentTypes.AccountId, royalty: (number | string | BN), tokenName: string | null, tokenUri: string | null, additionalInfo: string | null, __options?: ConstructorOptions): Promise<{
        result: SignAndSendSuccessResponse;
        address: any;
    }>;
}
