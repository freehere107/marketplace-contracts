"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mintAndListAuction = exports.mintAndApprove = exports.genTime = exports.mintAndList = void 0;
const marketplace_1 = require("../../typechain-generated/types-arguments/marketplace");
const marketplace_2 = require("../../typechain-generated/types-returns/marketplace");
const chai_1 = require("./chai");
const signers_1 = require("./signers");
const creator_1 = require("./test-setups/creator");
async function mintAndList(contract, nft, psp22, tokenId, price, isNative = false) {
    const bob = signers_1.Signers.Bob;
    await (0, chai_1.expect)(nft.tx.mint(bob.address, tokenId)).to.eventually.be.fulfilled;
    await (0, chai_1.expect)(nft.withSigner(bob).tx.approve(contract.address, tokenId, true)).to.eventually.be.fulfilled;
    if (!isNative) {
        await (0, chai_1.expect)(contract
            .withSigner(bob)
            .tx.listNftForSale(bob.address, nft.address, tokenId, price, marketplace_1.CurrencyBuilder.Custom(psp22.address))).to.eventually.be.fulfilled;
    }
    else {
        await (0, chai_1.expect)(contract.withSigner(bob).tx.listNftForSale(bob.address, nft.address, tokenId, price, marketplace_1.CurrencyBuilder.Native())).to.eventually.be.fulfilled;
    }
}
exports.mintAndList = mintAndList;
function genTime(fromStart, duration) {
    const START_TIME = Date.now() + fromStart;
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
    const { START_TIME, END_TIME } = genTime(fromStart, duration);
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
            currency: marketplace_1.CurrencyBuilder.Custom(psp22.address),
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
            currency: marketplace_1.CurrencyBuilder.Native(),
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
        currency: marketplace_1.CurrencyBuilder.Custom(psp22.address),
        startTime: START_TIME,
        endTime: END_TIME,
        currentPrice: 0,
        currentBidder: null,
        status: marketplace_2.AuctionStatus.waitingAuction,
        royalty: creator_1.COLLECTION_ROYALTY,
    });
    await (0, chai_1.expect)(contract.query.getAuctionCount()).to.have.returnNumber(indexBefore + 1);
    return { START_TIME, END_TIME };
}
exports.mintAndListAuction = mintAndListAuction;
//# sourceMappingURL=marketplace.js.map