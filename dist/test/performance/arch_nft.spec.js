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
const signers_1 = require("../shared/signers");
const arch_nft_1 = require("../shared/test-setups/arch_nft");
const SET_COLLECTION_NAME_MAX_FEE = new bn_js_1.default(3400000000);
const SET_COLLECTION_URI_MAX_FEE = new bn_js_1.default(3100000000);
const SET_COLLECTION_ADDITIONAL_INFO_MAX_FEE = new bn_js_1.default(3100000000);
const UPDATE_NFT_METADATA_MAX_FEE = new bn_js_1.default(3000000000);
(0, mocha_1.describe)(consts_1.PERFORMANCE_PREFIX + 'ArchNFT', function () {
    let contract;
    beforeEach(async function () {
        contract = await (0, arch_nft_1.setupArchNFT)();
    });
    after(async function () {
        await api_singleton_1.default.disconnect();
    });
    it('Should set collection name within max fee', async function () {
        await (0, chai_1.expect)(contract.query.setCollectionName('test')).to.have.feeLessThan(SET_COLLECTION_NAME_MAX_FEE);
    });
    it('Should set collection URI within max fee', async function () {
        await (0, chai_1.expect)(contract.query.setCollectionUri('test')).to.have.feeLessThan(SET_COLLECTION_URI_MAX_FEE);
    });
    it('Should set collection additional info within max fee', async function () {
        await (0, chai_1.expect)(contract.query.setCollectionAdditionalInfo('test')).to.have.feeLessThan(SET_COLLECTION_ADDITIONAL_INFO_MAX_FEE);
    });
    it('Should update NFT metadata within max fee', async function () {
        const id = { u8: 1 };
        await contract.tx.mint(signers_1.Signers.Alice.address, id);
        const metadata = {
            name: 'New name',
            description: 'New description',
            image: 'New image',
            externalUrl: 'New external url',
            categories: ['New category'],
        };
        await (0, chai_1.expect)(contract.query.updateNftMetadata(id, metadata)).to.have.feeLessThan(UPDATE_NFT_METADATA_MAX_FEE);
    });
});
//# sourceMappingURL=arch_nft.spec.js.map