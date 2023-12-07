import type { ApiPromise } from '@polkadot/api';
import { Abi } from '@polkadot/api-contract';
import type { KeyringPair } from '@polkadot/keyring/types';
import { ContractPromise } from '@polkadot/api-contract';
import type { ExternalSigner } from '@727-ventures/typechain-types';
import QueryMethods from '../query/creator';
import BuildExtrinsicMethods from '../build-extrinsic/creator';
import TxSignAndSendMethods from '../tx-sign-and-send/creator';
import MixedMethods from '../mixed-methods/creator';
import EventsClass from '../events/creator';
export default class Contract {
    readonly query: QueryMethods;
    readonly buildExtrinsic: BuildExtrinsicMethods;
    readonly tx: TxSignAndSendMethods;
    readonly methods: MixedMethods;
    readonly events: EventsClass;
    readonly address: string;
    readonly signer: KeyringPair | ExternalSigner;
    readonly nativeContract: ContractPromise;
    readonly nativeAPI: ApiPromise;
    readonly contractAbi: Abi;
    /**
     * @constructor

     * @param address - The address of the contract.
     * @param signer - The signer to use for signing transactions.
     * @param nativeAPI - The API instance to use for queries.
    */
    constructor(address: string, signer: KeyringPair | ExternalSigner, nativeAPI: ApiPromise);
    /**
     * name
     *
     * @returns The name of the contract.
    */
    get name(): string;
    /**
     * abi
     *
     * @returns The abi of the contract.
    */
    get abi(): Abi;
    /**
     * withSigner
     *
     * @param signer - The signer to use for signing transactions.
     * @returns New instance of the contract class with new signer.
     * @example
     * ```typescript
     * const contract = new Contract(address, signerAlice, api);
     * await contract.mint(signerBob.address, 100);
     * await contract.withSigner(signerBob).transfer(signerAlice.address, 100);
     * ```
    */
    withSigner(signer: KeyringPair | ExternalSigner): Contract;
    /**
    * withAddress
    *
    * @param address - The address of the contract.
    * @returns New instance of the contract class to interact with new contract.
    */
    withAddress(address: string): Contract;
    /**
     * withAPI
     *
     * @param api - The API instance to use for queries.
     * @returns New instance of the contract class to interact with new API.
    */
    withAPI(api: ApiPromise): Contract;
}
