import { KeyringPair } from '@polkadot/keyring/types';
export declare class Signers {
    private static keyring;
    private static alice;
    private static bob;
    private static charlie;
    private static _keyring;
    static setDefaultSigner(mnemonic: string): void;
    static get Alice(): KeyringPair;
    static get Bob(): KeyringPair;
    static get Charlie(): KeyringPair;
    static get defaultSigner(): KeyringPair;
}
