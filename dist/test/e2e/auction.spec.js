"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const mocha_1 = require("mocha");
const mock_auction_1 = require("../../typechain-generated/types-arguments/mock_auction");
const mock_auction_2 = require("../../typechain-generated/types-returns/mock_auction");
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const mock_auction_3 = require("../shared/mock_auction");
const signers_1 = require("../shared/signers");
const arch_nft_1 = require("../shared/test-setups/arch_nft");
const creator_1 = require("../shared/test-setups/creator");
const mock_auction_4 = require("../shared/test-setups/mock_auction");
const my_psp22_1 = require("../shared/test-setups/my_psp22");
(0, mocha_1.describe)(consts_1.E2E_PREFIX + 'Auction', () => {
    let contract;
    let nft;
    let psp22;
    beforeEach(async () => {
        contract = await (0, mock_auction_4.setupMockAuction)();
        nft = await (0, arch_nft_1.setupArchNFT)();
        psp22 = await (0, my_psp22_1.setupPSP22)();
    });
    (0, mocha_1.after)(async () => {
        await api_singleton_1.default.disconnect();
    });
    it('Can create auction', async () => {
        const contract = await (0, mock_auction_4.setupMockAuction)();
        const nft = await (0, arch_nft_1.setupArchNFT)();
        const psp22 = await (0, my_psp22_1.setupPSP22)();
        await (0, chai_1.expect)(contract.query.getAuctionCount()).to.have.returnNumber(0);
        await (0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID, 100, 1);
    });
    (0, mocha_1.describe)('Get Auction Count', () => {
        it('should return 0 when no auctions exist', async () => {
            await (0, chai_1.expect)(contract.query.getAuctionCount()).to.have.returnNumber(0);
        });
        it('should correctly count the number of auctions', async () => {
            await (0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await (0, chai_1.expect)(contract.query.getAuctionCount()).to.have.returnNumber(1);
            await (0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_2, 100, 1);
            await (0, chai_1.expect)(contract.query.getAuctionCount()).to.have.returnNumber(2);
            await (0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_3, 100, 1);
            await (0, chai_1.expect)(contract.query.getAuctionCount()).to.have.returnNumber(3);
        });
    });
    (0, mocha_1.describe)('Get Auction by Index', () => {
        it('should return None when no auctions exist', async () => {
            await (0, chai_1.expect)(contract.query.getAuctionByIndex(0)).to.be.returnValue(null);
        });
        it('should return None when index is out of range', async () => {
            await (0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await (0, chai_1.expect)(contract.query.getAuctionByIndex(1)).to.be.returnValue(null);
        });
        it('should return an auction when given a valid index', async () => {
            const { START_TIME, END_TIME } = await (0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await (0, chai_1.expect)(contract.query.getAuctionByIndex(0)).to.be.deepReturnValue({
                id: 0,
                creator: signers_1.Signers.Bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID_1,
                startPrice: 100,
                minBidStep: 1,
                currency: mock_auction_1.CurrencyBuilder.Custom(psp22.address),
                startTime: START_TIME,
                endTime: END_TIME,
                currentPrice: 0,
                currentBidder: null,
                status: mock_auction_2.AuctionStatus.waitingAuction,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
        });
    });
    (0, mocha_1.describe)('List NFT for Auction', () => {
        it('should list an NFT for auction under normal circumstances', async () => {
            await (0, chai_1.expect)((0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1)).to.eventually.be.fulfilled;
        });
    });
    (0, mocha_1.describe)('Start Auction', () => {
        it('should start an auction under normal circumstances', async () => {
            await (0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await contract.tx.addTimestamp(3100);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled;
            const auction = (await contract.query.getAuctionByIndex(0)).value.unwrapRecursively();
            (0, chai_1.expect)(auction === null || auction === void 0 ? void 0 : auction.status).to.equal(mock_auction_2.AuctionStatus.inAuction);
        });
    });
    (0, mocha_1.describe)('Cancel Auction', () => {
        it('should cancel an auction under normal circumstances', async () => {
            await (0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.cancelAuction(0)).to.eventually.be.fulfilled;
        });
    });
    (0, mocha_1.describe)('Bid NFT', () => {
        it('should bid on an auction under normal circumstances', async () => {
            await (0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1, false, 100000000, 1000);
            await contract.tx.addTimestamp(1100);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(psp22.withSigner(signers_1.Signers.Alice).tx.approve(contract.address, 101)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled;
        });
        it('should bid twice', async () => {
            await (0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1, false, 100000000, 1000);
            await contract.tx.addTimestamp(1100);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(psp22.withSigner(signers_1.Signers.Alice).tx.approve(contract.address, 101)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(psp22.withSigner(signers_1.Signers.Charlie).tx.approve(contract.address, 103)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Charlie).tx.bidNft(0, 101)).to.eventually.be.fulfilled;
        });
    });
    (0, mocha_1.describe)('Claim NFT', () => {
        it('should claim an NFT from an auction under normal circumstances', async () => {
            await (0, mock_auction_3.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1, false, 300, 100);
            await contract.tx.addTimestamp(110);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled;
            await psp22.withSigner(signers_1.Signers.Alice).tx.approve(contract.address, 200);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled;
            await contract.tx.addTimestamp(310);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.claimNft(0)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(nft.withSigner(signers_1.Signers.Alice).query.ownerOf(consts_1.TOKEN_ID_1)).to.have.returnValue(signers_1.Signers.Alice.address);
            const auction = (await contract.query.getAuctionByIndex(0)).value.unwrapRecursively();
            (0, chai_1.expect)(auction.status).to.deep.equal(mock_auction_2.AuctionStatus.ended);
        });
    });
});
//# sourceMappingURL=auction.spec.js.map