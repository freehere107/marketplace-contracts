"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const bn_js_1 = __importDefault(require("bn.js"));
const mocha_1 = require("mocha");
const creator_json_1 = __importDefault(require("../../artifacts/creator.json"));
const user_json_1 = __importDefault(require("../../artifacts/user.json"));
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const account_manager_1 = require("../shared/test-setups/account_manager");
const CREATE_ACCOUNT_MAX_FEE = new bn_js_1.default(13500000000);
const CREATE_CREATOR_ACCOUNT_MAX_FEE = new bn_js_1.default(13100000000);
const SET_CREATOR_CODE_HASH_MAX_FEE = new bn_js_1.default(10000000000);
const SET_USER_CODE_HASH_MAX_FEE = new bn_js_1.default(10000000000);
(0, mocha_1.describe)(consts_1.PERFORMANCE_PREFIX + 'AccountManager', function () {
    let contract;
    beforeEach(async function () {
        contract = await (0, account_manager_1.setupAccountManager)();
    });
    after(async function () {
        await api_singleton_1.default.disconnect();
    });
    it('Should create an account within max fee', async function () {
        await (0, chai_1.expect)(contract.query.createAccount()).to.have.feeLessThan(CREATE_ACCOUNT_MAX_FEE);
    });
    it('Should create a creator account within max fee', async function () {
        await (0, chai_1.expect)(contract.query.createCreatorAccount()).to.have.feeLessThan(CREATE_CREATOR_ACCOUNT_MAX_FEE);
    });
    it('Should set the creator code hash within max fee', async function () {
        await (0, chai_1.expect)(contract.query.setCreatorCodeHash(creator_json_1.default.source.hash)).to.have.feeLessThan(SET_CREATOR_CODE_HASH_MAX_FEE);
    });
    it('Should set the user code hash within max fee', async function () {
        await (0, chai_1.expect)(contract.query.setUserCodeHash(user_json_1.default.source.hash)).to.have.feeLessThan(SET_USER_CODE_HASH_MAX_FEE);
    });
});
//# sourceMappingURL=account_manager.spec.js.map