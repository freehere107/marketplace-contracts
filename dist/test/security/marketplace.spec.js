"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const marketplace_1 = require("../../typechain-generated/types-arguments/marketplace");
const marketplace_2 = require("../../typechain-generated/types-returns/marketplace");
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const marketplace_3 = require("../shared/marketplace");
const signers_1 = require("../shared/signers");
const arch_nft_1 = require("../shared/test-setups/arch_nft");
const marketplace_4 = require("../shared/test-setups/marketplace");
const my_psp22_1 = require("../shared/test-setups/my_psp22");
const creator_1 = require("../shared/test-setups/creator");
async function getBalance(signer) {
    const api = await api_singleton_1.default.getInstance();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { data: balance } = await api.query.system.account(signer.address);
    return balance.free;
}
(0, mocha_1.describe)(consts_1.SECURITY_PREFIX + 'Marketplace', () => {
    it("Try to cancel a listing that doesn't exist.", async () => {
        const contract = await (0, marketplace_4.setupMarketplace)();
        const bob = signers_1.Signers.Bob;
        await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(0);
        await (0, chai_1.expect)(contract.withSigner(bob).tx.cancelListing(0)).to.eventually.be.rejected;
        await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(0);
    });
    (0, mocha_1.describe)('PSP22 Currency', () => {
        it('Try to buy multiple NFTs where some or all ids are not valid.', async () => {
            const contract = await (0, marketplace_4.setupMarketplace)();
            const nft = await (0, arch_nft_1.setupArchNFT)();
            const psp22 = await (0, my_psp22_1.setupPSP22)();
            const bob = signers_1.Signers.Bob;
            const alice = signers_1.Signers.Alice;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(0);
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, consts_1.TOKEN_ID_1, consts_1.PRICE)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, consts_1.TOKEN_ID_2, consts_1.PRICE)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, consts_1.TOKEN_ID_3, consts_1.PRICE)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(3);
            await (0, chai_1.expect)(psp22.withSigner(alice).tx.approve(contract.address, 3 * consts_1.PRICE_WITH_FEE)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(alice).tx.buyBatch([0, 1, 4])).to.eventually.be.rejected;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(3);
            await (0, chai_1.expect)(contract.query.getListingByIndex(2)).to.have.deepReturnValue({
                id: 2,
                creator: bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID_3,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Custom(psp22.address),
                status: marketplace_2.ListingStatus.onSale,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
        });
    });
    (0, mocha_1.describe)('Native currency', () => {
        it('Cannot Buy an NFT from a listing with a lower price than the listing.', async () => {
            const contract = await (0, marketplace_4.setupMarketplace)();
            const nft = await (0, arch_nft_1.setupArchNFT)();
            const psp22 = await (0, my_psp22_1.setupPSP22)();
            const defaultSigner = signers_1.Signers.defaultSigner;
            const bob = signers_1.Signers.Bob;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(0);
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, consts_1.TOKEN_ID, consts_1.PRICE, true)).to.eventually.be.fulfilled;
            const balanceBeforeCreator = await getBalance(defaultSigner);
            const balanceBeforeBob = await getBalance(bob);
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(1);
            await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
                id: 0,
                creator: bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Native(),
                status: marketplace_2.ListingStatus.onSale,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.buyNft(0, { value: consts_1.PRICE - 1 })).to.eventually.be.rejected;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(1);
            await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
                id: 0,
                creator: bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Native(),
                status: marketplace_2.ListingStatus.onSale,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
            await (0, chai_1.expect)(nft.query.ownerOf(consts_1.TOKEN_ID)).to.have.returnValue(contract.address);
            const balanceAfterCreator = await getBalance(defaultSigner);
            const balanceAfterBob = await getBalance(bob);
            (0, chai_1.expect)(balanceAfterCreator.toString()).to.be.equal(balanceBeforeCreator.toString());
            (0, chai_1.expect)(balanceAfterBob.toString()).to.be.equal(balanceBeforeBob.toString());
        });
    });
    it('Cannot buy an cancelled NFT from a listing.', async () => {
        const contract = await (0, marketplace_4.setupMarketplace)();
        const nft = await (0, arch_nft_1.setupArchNFT)();
        const psp22 = await (0, my_psp22_1.setupPSP22)();
        const bob = signers_1.Signers.Bob;
        await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, consts_1.TOKEN_ID, consts_1.PRICE, true)).to.eventually.be.fulfilled;
        await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
            id: 0,
            creator: bob.address,
            collection: nft.address,
            tokenId: consts_1.TOKEN_ID,
            price: consts_1.PRICE,
            currency: marketplace_1.CurrencyBuilder.Native(),
            status: marketplace_2.ListingStatus.onSale,
            royalty: creator_1.COLLECTION_ROYALTY,
        });
        await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.cancelListing(0)).to.eventually.be.fulfilled;
        await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
            id: 0,
            creator: bob.address,
            collection: nft.address,
            tokenId: consts_1.TOKEN_ID,
            price: consts_1.PRICE,
            currency: marketplace_1.CurrencyBuilder.Native(),
            status: marketplace_2.ListingStatus.cancelled,
            royalty: creator_1.COLLECTION_ROYALTY,
        });
        await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.buyNft(0, { value: consts_1.PRICE })).to.eventually.be.rejected;
        await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
            id: 0,
            creator: bob.address,
            collection: nft.address,
            tokenId: consts_1.TOKEN_ID,
            price: consts_1.PRICE,
            currency: marketplace_1.CurrencyBuilder.Native(),
            status: marketplace_2.ListingStatus.cancelled,
            royalty: creator_1.COLLECTION_ROYALTY,
        });
        await (0, chai_1.expect)(nft.query.ownerOf(consts_1.TOKEN_ID)).to.have.returnValue(bob.address);
    });
    (0, mocha_1.after)(async () => {
        await api_singleton_1.default.disconnect();
    });
});
//# sourceMappingURL=marketplace.spec.js.map