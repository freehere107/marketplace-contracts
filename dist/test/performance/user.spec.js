"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const bn_js_1 = __importDefault(require("bn.js"));
const mocha_1 = require("mocha");
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const user_1 = require("../shared/test-setups/user");
const SET_USER_DATA_MAX_FEE = new bn_js_1.default(3800000000);
(0, mocha_1.describe)(consts_1.PERFORMANCE_PREFIX + 'Creator', function () {
    let contract;
    beforeEach(async function () {
        contract = await (0, user_1.setupUser)();
    });
    after(async function () {
        await api_singleton_1.default.disconnect();
    });
    it('Should set user data under max fee', async function () {
        await (0, chai_1.expect)(contract.query.setUserData({
            nick: "@nick",
            avatar: {
                id: {
                    u8: 0
                },
                uri: "https://example.com/avatar.png",
                contractAddress: "0x000000"
            },
            additionInfo: "Some info"
        })).to.have.feeLessThan(SET_USER_DATA_MAX_FEE);
    });
});
//# sourceMappingURL=user.spec.js.map