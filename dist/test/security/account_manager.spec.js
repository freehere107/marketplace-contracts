"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const mocha_1 = require("mocha");
const creator_json_1 = __importDefault(require("../../artifacts/creator.json"));
const user_json_1 = __importDefault(require("../../artifacts/user.json"));
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const signers_1 = require("../shared/signers");
const account_manager_1 = require("../shared/test-setups/account_manager");
(0, mocha_1.describe)(consts_1.SECURITY_PREFIX + 'Account Manager', () => {
    const USER_CODE_HASH = user_json_1.default.source.hash;
    const CREATOR_CODE_HASH = creator_json_1.default.source.hash;
    it('Not admin cannot change creator code hash', async () => {
        const contract = await (0, account_manager_1.setupAccountManager)();
        await (0, chai_1.expect)(contract
            .withSigner(signers_1.Signers.Alice)
            .tx
            .setCreatorCodeHash(USER_CODE_HASH)).to.eventually.be.rejected;
    });
    it('Not admin cannot change user code hash', async () => {
        const contract = await (0, account_manager_1.setupAccountManager)();
        await (0, chai_1.expect)(contract
            .withSigner(signers_1.Signers.Alice)
            .tx
            .setUserCodeHash(CREATOR_CODE_HASH)).to.eventually.be.rejected;
    });
    (0, mocha_1.after)(async () => {
        await api_singleton_1.default.disconnect();
    });
});
//# sourceMappingURL=account_manager.spec.js.map