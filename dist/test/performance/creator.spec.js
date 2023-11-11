"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const bn_js_1 = __importDefault(require("bn.js"));
const arch_nft_json_1 = __importDefault(require("../../artifacts/arch_nft.json"));
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const creator_1 = require("../shared/test-setups/creator");
const CREATE_COLLECTION_MAX_FEE = new bn_js_1.default(16500000000);
describe(consts_1.PERFORMANCE_PREFIX + 'Creator', function () {
    let contract;
    beforeEach(async function () {
        contract = await (0, creator_1.setupCreator)();
    });
    after(async function () {
        await api_singleton_1.default.disconnect();
    });
    it('Should create collection within max fee', async function () {
        await (0, chai_1.expect)(contract.query.createCollection("test", "test", 100, "123", arch_nft_json_1.default.source.hash)).to.have.feeLessThan(CREATE_COLLECTION_MAX_FEE);
    });
});
//# sourceMappingURL=creator.spec.js.map