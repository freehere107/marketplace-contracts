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
const creator_1 = require("../shared/test-setups/creator");
(0, mocha_1.describe)(consts_1.E2E_PREFIX + 'Creator', () => {
    it('Can edit user data', async () => {
        const contract = await (0, creator_1.setupCreator)();
        await contract.tx.setUserData({
            nick: '@some_nick',
            avatar: null,
            additionInfo: 'Some additional info',
        });
        await (0, chai_1.expect)(contract.query.getUserData()).to.have.deepReturnValue({
            nick: '@some_nick',
            avatar: null,
            additionInfo: 'Some additional info',
        });
    });
    (0, mocha_1.after)(async () => {
        await api_singleton_1.default.disconnect();
    });
});
//# sourceMappingURL=creator.spec.js.map