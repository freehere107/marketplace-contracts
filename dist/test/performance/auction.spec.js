"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const bn_js_1 = __importDefault(require("bn.js"));
const mock_auction_1 = require("../../typechain-generated/types-arguments/mock_auction");
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const mock_auction_2 = require("../shared/mock_auction");
const signers_1 = require("../shared/signers");
const arch_nft_1 = require("../shared/test-setups/arch_nft");
const mock_auction_3 = require("../shared/test-setups/mock_auction");
const my_psp22_1 = require("../shared/test-setups/my_psp22");
const LIST_NFT_FOR_AUCTION_MAX_FEE = new bn_js_1.default(35000000000);
const START_AUCTION_MAX_FEE = new bn_js_1.default(4500000000);
const CANCEL_AUCTION_MAX_FEE = new bn_js_1.default(13500000000);
const BID_NFT_MAX_FEE = new bn_js_1.default(3400000000);
const CLAIM_NFT_MAX_FEE = new bn_js_1.default(35000000000);
describe(consts_1.PERFORMANCE_PREFIX + 'Auction', function () {
    let contract;
    let psp22;
    let psp34;
    beforeEach(async function () {
        contract = await (0, mock_auction_3.setupMockAuction)();
        psp22 = await (0, my_psp22_1.setupPSP22)();
        psp34 = await (0, arch_nft_1.setupArchNFT)();
    });
    after(async function () {
        await api_singleton_1.default.disconnect();
    });
    it('Should list NFT for auction within max fee', async function () {
        await (0, mock_auction_2.mintAndApprove)(contract, psp34, consts_1.TOKEN_ID, signers_1.Signers.Charlie);
        const currentTime = (await contract.query.timestamp()).value.unwrapRecursively();
        const time = (0, mock_auction_2.genTime)(currentTime, 10, 100);
        await (0, chai_1.expect)(contract.query.listNftForAuction({
            creator: signers_1.Signers.Charlie.address,
            collection: psp34.address,
            tokenId: consts_1.TOKEN_ID,
            startPrice: consts_1.PRICE,
            minBidStep: consts_1.MIN_BID_STEP,
            currency: mock_auction_1.CurrencyBuilder.Custom(psp22.address),
            startTime: time.START_TIME,
            endTime: time.END_TIME
        })).to.have.feeLessThan(LIST_NFT_FOR_AUCTION_MAX_FEE);
    });
    it('Should start auction within max fee', async function () {
        await (0, mock_auction_2.mintAndListAuction)(contract, psp34, psp22, consts_1.TOKEN_ID, consts_1.PRICE, consts_1.MIN_BID_STEP);
        await contract.tx.addTimestamp(3001);
        await (0, chai_1.expect)(contract.query.startAuction(0)).to.have.feeLessThan(START_AUCTION_MAX_FEE);
    });
    it('Should cancel auction within max fee', async function () {
        await (0, mock_auction_2.mintAndListAuction)(contract, psp34, psp22, consts_1.TOKEN_ID, consts_1.PRICE, consts_1.MIN_BID_STEP);
        await (0, chai_1.expect)(contract.query.cancelAuction(0)).to.have.feeLessThan(CANCEL_AUCTION_MAX_FEE);
    });
    it('Should bid on NFT within max fee', async function () {
        await (0, mock_auction_2.mintAndListAuction)(contract, psp34, psp22, consts_1.TOKEN_ID, consts_1.PRICE, consts_1.MIN_BID_STEP);
        await contract.tx.addTimestamp(3001);
        await contract.tx.startAuction(0);
        await contract.tx.addTimestamp(5001);
        await psp22.withSigner(signers_1.Signers.Alice).tx.approve(contract.address, 2 * consts_1.PRICE_WITH_FEE);
        await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).query.bidNft(0, 2 * consts_1.PRICE)).to.have.feeLessThan(BID_NFT_MAX_FEE);
    });
    it('Should claim NFT within max fee', async function () {
        await (0, mock_auction_2.mintAndListAuction)(contract, psp34, psp22, consts_1.TOKEN_ID, consts_1.PRICE, consts_1.MIN_BID_STEP, false, 100, 20);
        await contract.tx.addTimestamp(50);
        await contract.tx.startAuction(0);
        await psp22.withSigner(signers_1.Signers.Alice).tx.approve(contract.address, 2 * consts_1.PRICE_WITH_FEE);
        await contract.withSigner(signers_1.Signers.Alice).tx.bidNft(0, 2 * consts_1.PRICE);
        await contract.tx.addTimestamp(100);
        await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).query.claimNft(0)).to.have.feeLessThan(CLAIM_NFT_MAX_FEE);
    });
});
//# sourceMappingURL=auction.spec.js.map