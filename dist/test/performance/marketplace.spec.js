"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const bn_js_1 = __importDefault(require("bn.js"));
const mocha_1 = require("mocha");
const marketplace_1 = require("../../typechain-generated/types-arguments/marketplace");
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const marketplace_2 = require("../shared/marketplace");
const signers_1 = require("../shared/signers");
const arch_nft_1 = require("../shared/test-setups/arch_nft");
const marketplace_3 = require("../shared/test-setups/marketplace");
const my_psp22_1 = require("../shared/test-setups/my_psp22");
const LIST_NFT_FOR_SALE_MAX_FEE = new bn_js_1.default(25000000000);
const CANCEL_LISTING_MAX_FEE = new bn_js_1.default(14000000000);
const BUY_NFT_MAX_FEE = new bn_js_1.default(21000000000);
const BUY_BATCH_MAX_FEE = new bn_js_1.default(32000000000);
(0, mocha_1.describe)(consts_1.PERFORMANCE_PREFIX + 'Marketplace', function () {
    let contract;
    let psp22;
    let psp34;
    beforeEach(async function () {
        contract = await (0, marketplace_3.setupMarketplace)();
        psp22 = await (0, my_psp22_1.setupPSP22)();
        psp34 = await (0, arch_nft_1.setupArchNFT)();
    });
    after(async function () {
        await api_singleton_1.default.disconnect();
    });
    it('Should list NFT for sale within max fee', async function () {
        await (0, marketplace_2.mintAndApprove)(contract, psp34, consts_1.TOKEN_ID, signers_1.Signers.Charlie);
        await (0, chai_1.expect)(contract.query.listNftForSale(signers_1.Signers.Charlie.address, psp34.address, consts_1.TOKEN_ID, consts_1.PRICE, marketplace_1.CurrencyBuilder.Custom(psp22.address))).to.have.feeLessThan(LIST_NFT_FOR_SALE_MAX_FEE);
    });
    it('Should cancel listing within max fee', async function () {
        await (0, marketplace_2.mintAndList)(contract, psp34, psp22, consts_1.TOKEN_ID, consts_1.PRICE);
        await (0, chai_1.expect)(contract.query.cancelListing(0)).to.have.feeLessThan(CANCEL_LISTING_MAX_FEE);
    });
    it('Should buy NFT within max fee', async function () {
        await (0, marketplace_2.mintAndList)(contract, psp34, psp22, consts_1.TOKEN_ID, consts_1.PRICE);
        await psp22.withSigner(signers_1.Signers.Alice).tx.approve(contract.address, consts_1.PRICE_WITH_FEE);
        await (0, chai_1.expect)(contract.query.buyNft(0)).to.have.feeLessThan(BUY_NFT_MAX_FEE);
    });
    it('Should buy batch within max fee', async function () {
        await (0, marketplace_2.mintAndList)(contract, psp34, psp22, consts_1.TOKEN_ID_1, consts_1.PRICE);
        await (0, marketplace_2.mintAndList)(contract, psp34, psp22, consts_1.TOKEN_ID_2, consts_1.PRICE);
        await (0, marketplace_2.mintAndList)(contract, psp34, psp22, consts_1.TOKEN_ID_3, consts_1.PRICE);
        await psp22.withSigner(signers_1.Signers.Alice).tx.approve(contract.address, consts_1.PRICE_WITH_FEE * 3);
        await (0, chai_1.expect)(contract.query.buyBatch([0, 1, 2])).to.have.feeLessThan(BUY_BATCH_MAX_FEE);
    });
});
//# sourceMappingURL=marketplace.spec.js.map