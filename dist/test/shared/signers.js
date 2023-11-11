"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Signers = void 0;
// SPDX-License-Identifier: MIT
const api_1 = require("@polkadot/api");
class Signers {
    static _keyring() {
        if (!this.keyring) {
            this.keyring = new api_1.Keyring({ type: 'sr25519' });
        }
        return this.keyring;
    }
    static setDefaultSigner(mnemonic) {
        this.charlie = this._keyring().addFromMnemonic(mnemonic);
    }
    static get Alice() {
        if (!this.alice) {
            this.alice = this._keyring().addFromUri('//Alice');
        }
        return this.alice;
    }
    static get Bob() {
        if (!this.bob) {
            this.bob = this._keyring().addFromUri('//Bob');
        }
        return this.bob;
    }
    static get Charlie() {
        if (!this.charlie) {
            this.charlie = this._keyring().addFromUri('//Charlie');
        }
        return this.charlie;
    }
    static get defaultSigner() {
        return this.Charlie;
    }
}
exports.Signers = Signers;
//# sourceMappingURL=signers.js.map