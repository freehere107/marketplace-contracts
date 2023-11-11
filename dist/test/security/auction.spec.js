"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const mocha_1 = require("mocha");
const mock_auction_1 = require("../../typechain-generated/types-returns/mock_auction");
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const mock_auction_2 = require("../shared/mock_auction");
const signers_1 = require("../shared/signers");
const arch_nft_1 = require("../shared/test-setups/arch_nft");
const mock_auction_3 = require("../shared/test-setups/mock_auction");
const my_psp22_1 = require("../shared/test-setups/my_psp22");
(0, mocha_1.describe)(consts_1.SECURITY_PREFIX + 'Auction', () => {
    let contract;
    let nft;
    let psp22;
    beforeEach(async () => {
        contract = await (0, mock_auction_3.setupMockAuction)();
        nft = await (0, arch_nft_1.setupArchNFT)();
        psp22 = await (0, my_psp22_1.setupPSP22)();
    });
    (0, mocha_1.after)(async () => {
        await api_singleton_1.default.disconnect();
    });
    (0, mocha_1.describe)('Get Auction by Index', () => {
        it('should return None when index is out of range', async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await (0, chai_1.expect)(contract.query.getAuctionByIndex(1)).to.be.returnValue(null);
        });
    });
    (0, mocha_1.describe)('List NFT for Auction', () => {
        it('should return an error if auction price is zero', async () => {
            await (0, chai_1.expect)((0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 0, 1)).to.eventually.be.rejected;
        });
        it('should return an error if the min bid step is zero', async () => {
            await (0, chai_1.expect)((0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 0)).to.eventually.be.rejected;
        });
        it('should return an error if the end time is before the start time', async () => {
            await (0, chai_1.expect)((0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1, false, -5000, 5000)).to.eventually.be
                .rejected;
        });
    });
    (0, mocha_1.describe)('Start Auction', () => {
        it('should return an error when the auction was not found', async () => {
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.rejected;
        });
        it('should return an error if the auction is not in the waiting state', async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.cancelAuction(0)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.rejected;
        });
        it('should return an error if the caller is not the auction creator', async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.startAuction(0)).to.eventually.be.rejected;
        });
    });
    (0, mocha_1.describe)('Cancel Auction', () => {
        it('should return an error when the auction was not found', async () => {
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.cancelAuction(0)).to.eventually.be.rejected;
        });
        it('should return an error if the auction is not in the waiting state', async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await contract.tx.addTimestamp(3010);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.cancelAuction(0)).to.eventually.be.rejected;
        });
        it('should return an error if the caller is not the auction creator', async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.cancelAuction(0)).to.eventually.be.rejected;
        });
    });
    (0, mocha_1.describe)('Bid NFT', () => {
        it('should return an error when the auction was not found', async () => {
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.bidNft(0, 100)).to.eventually.be.rejected;
        });
        it('should return an error if the auction is not in the auction state', async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.bidNft(0, 100)).to.eventually.be.rejected;
        });
        it('should return an error if the bid price is too low', async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await contract.tx.addTimestamp(3010);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.bidNft(0, 99)).to.eventually.be.rejected;
        });
        it('should return an error if the caller is the auction creator', async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await contract.tx.addTimestamp(3010);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.bidNft(0, 100)).to.eventually.be.rejected;
        });
        it(`can't bid twice with the low bid step`, async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 5, false, 100000000, 1000);
            await contract.tx.addTimestamp(1100);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(psp22.withSigner(signers_1.Signers.Alice).tx.approve(contract.address, 101)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(psp22.withSigner(signers_1.Signers.Charlie).tx.approve(contract.address, 102)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Charlie).tx.bidNft(0, 101)).to.eventually.be.rejected;
        });
        it(`can't bid if auction is ended`, async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1, false, 300, 100);
            await contract.tx.addTimestamp(110);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled;
            await psp22.withSigner(signers_1.Signers.Alice).tx.approve(contract.address, 101);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.bidNft(0, 100)).to.eventually.be.fulfilled;
            await contract.tx.addTimestamp(310);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.claimNft(0)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(nft.withSigner(signers_1.Signers.Alice).query.ownerOf(consts_1.TOKEN_ID_1)).to.have.returnValue(signers_1.Signers.Alice.address);
            const auction = (await contract.query.getAuctionByIndex(0)).value.unwrapRecursively();
            (0, chai_1.expect)(auction.status).to.deep.equal(mock_auction_1.AuctionStatus.ended);
            await psp22.withSigner(signers_1.Signers.Charlie).tx.approve(contract.address, 105);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Charlie).tx.bidNft(0, 101)).to.eventually.be.rejected;
        });
    });
    (0, mocha_1.describe)('Claim NFT', () => {
        it('should return an error when the auction was not found', async () => {
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.claimNft(0)).to.eventually.be.rejected;
        });
        it('should return an error if the auction is not in the auction state', async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.claimNft(0)).to.eventually.be.rejected;
        });
        it('should return an error if the auction has not ended', async () => {
            await (0, mock_auction_2.mintAndListAuction)(contract, nft, psp22, consts_1.TOKEN_ID_1, 100, 1, false, 100000000, 100);
            await contract.tx.addTimestamp(110);
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.startAuction(0)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.claimNft(0)).to.eventually.be.rejected;
        });
    });
});
//# sourceMappingURL=auction.spec.js.map