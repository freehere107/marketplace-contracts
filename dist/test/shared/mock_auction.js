"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mintAndListAuction = exports.mintAndApprove = exports.genTime = void 0;
const mock_auction_1 = require("../../typechain-generated/types-arguments/mock_auction");
const mock_auction_2 = require("../../typechain-generated/types-returns/mock_auction");
const chai_1 = require("./chai");
const signers_1 = require("./signers");
const creator_1 = require("./test-setups/creator");
function genTime(currentTime, fromStart, duration) {
    const START_TIME = currentTime + fromStart;
    const END_TIME = START_TIME + duration;
    return { START_TIME, END_TIME };
}
exports.genTime = genTime;
async function mintAndApprove(contract, nft, tokenId, minter) {
    await (0, chai_1.expect)(nft.tx.mint(minter.address, tokenId)).to.eventually.be.fulfilled;
    await (0, chai_1.expect)(nft.withSigner(minter).tx.approve(contract.address, tokenId, true)).to.eventually.be.fulfilled;
}
exports.mintAndApprove = mintAndApprove;
async function mintAndListAuction(contract, nft, psp22, tokenId, price, minBidStep, isNative = false, duration = 5000, fromStart = 3000) {
    const bob = signers_1.Signers.Bob;
    await mintAndApprove(contract, nft, tokenId, bob);
    const currentTime = (await contract.query.timestamp()).value.unwrapRecursively();
    const { START_TIME, END_TIME } = genTime(currentTime, fromStart, duration);
    const indexBefore = (await contract.query.getAuctionCount()).value.unwrapRecursively().toNumber();
    if (!isNative) {
        await (0, chai_1.expect)(contract
            .withSigner(bob)
            .tx.listNftForAuction({
            creator: bob.address,
            collection: nft.address,
            tokenId,
            startPrice: price,
            minBidStep,
            currency: mock_auction_1.CurrencyBuilder.Custom(psp22.address),
            startTime: START_TIME,
            endTime: END_TIME
        })).to.eventually.be.fulfilled;
    }
    else {
        await (0, chai_1.expect)(contract
            .withSigner(bob)
            .tx.listNftForAuction({
            creator: bob.address,
            collection: nft.address,
            tokenId,
            startPrice: price,
            minBidStep,
            currency: mock_auction_1.CurrencyBuilder.Native(),
            startTime: START_TIME,
            endTime: END_TIME
        })).to.eventually.be.fulfilled;
    }
    await (0, chai_1.expect)(contract.query.getAuctionByIndex(indexBefore)).to.be.deepReturnValue({
        id: indexBefore,
        creator: signers_1.Signers.Bob.address,
        collection: nft.address,
        tokenId: tokenId,
        startPrice: price,
        minBidStep: minBidStep,
        currency: mock_auction_1.CurrencyBuilder.Custom(psp22.address),
        startTime: START_TIME,
        endTime: END_TIME,
        currentPrice: 0,
        currentBidder: null,
        status: mock_auction_2.AuctionStatus.waitingAuction,
        royalty: creator_1.COLLECTION_ROYALTY,
    });
    await (0, chai_1.expect)(contract.query.getAuctionCount()).to.have.returnNumber(indexBefore + 1);
    return { START_TIME, END_TIME };
}
exports.mintAndListAuction = mintAndListAuction;
//# sourceMappingURL=mock_auction.js.map