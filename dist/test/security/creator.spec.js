"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const mocha_1 = require("mocha");
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const signers_1 = require("../shared/signers");
const creator_1 = require("../shared/test-setups/creator");
(0, mocha_1.describe)(consts_1.SECURITY_PREFIX + 'Creator', () => {
    it('Cannot edit user data if not owner', async () => {
        const contract = await (0, creator_1.setupCreator)();
        await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.setUserData({
            nick: '@some_nick',
            avatar: null,
            additionInfo: 'Some additional info',
        })).to.eventually.be.rejected;
    });
    (0, mocha_1.after)(async () => {
        await api_singleton_1.default.disconnect();
    });
});
//# sourceMappingURL=creator.spec.js.map