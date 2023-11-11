"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bn_js_1 = __importDefault(require("bn.js"));
const mocha_1 = require("mocha");
const marketplace_1 = require("../../typechain-generated/types-arguments/marketplace");
const marketplace_2 = require("../../typechain-generated/types-returns/marketplace");
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const marketplace_3 = require("../shared/marketplace");
const signers_1 = require("../shared/signers");
const arch_nft_1 = require("../shared/test-setups/arch_nft");
const creator_1 = require("../shared/test-setups/creator");
const marketplace_4 = require("../shared/test-setups/marketplace");
const my_psp22_1 = require("../shared/test-setups/my_psp22");
async function getBalance(signer) {
    const api = await api_singleton_1.default.getInstance();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { data: balance } = await api.query.system.account(signer.address);
    return balance.free;
}
(0, mocha_1.describe)(consts_1.E2E_PREFIX + 'Marketplace', () => {
    it('Upon initialization, the listing count should be zero.', async () => {
        const contract = await (0, marketplace_4.setupMarketplace)();
        await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(0);
    });
    it('Get listing by index when there are no listings should return None', async () => {
        const contract = await (0, marketplace_4.setupMarketplace)();
        await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.returnValue(null);
    });
    it('Cancel a listing.', async () => {
        const contract = await (0, marketplace_4.setupMarketplace)();
        const nft = await (0, arch_nft_1.setupArchNFT)();
        const psp22 = await (0, my_psp22_1.setupPSP22)();
        const bob = signers_1.Signers.Bob;
        await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(0);
        await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, consts_1.TOKEN_ID, consts_1.PRICE)).to.eventually.be.fulfilled;
        await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(1);
        await (0, chai_1.expect)(contract.withSigner(bob).tx.cancelListing(0)).to.eventually.be.fulfilled;
        await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(1);
        await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
            id: 0,
            creator: bob.address,
            collection: nft.address,
            tokenId: consts_1.TOKEN_ID,
            price: consts_1.PRICE,
            currency: marketplace_1.CurrencyBuilder.Custom(psp22.address),
            status: marketplace_2.ListingStatus.cancelled,
            royalty: creator_1.COLLECTION_ROYALTY,
        });
    });
    (0, mocha_1.describe)('PSP22 Currency', () => {
        it('List a new NFT for sale', async () => {
            const contract = await (0, marketplace_4.setupMarketplace)();
            const nft = await (0, arch_nft_1.setupArchNFT)();
            const psp22 = await (0, my_psp22_1.setupPSP22)();
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(0);
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, consts_1.TOKEN_ID, consts_1.PRICE)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(1);
            await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
                id: 0,
                creator: signers_1.Signers.Bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Custom(psp22.address),
                status: marketplace_2.ListingStatus.onSale,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
        });
        it('Buy an NFT from a listing.', async () => {
            const contract = await (0, marketplace_4.setupMarketplace)();
            const nft = await (0, arch_nft_1.setupArchNFT)();
            const psp22 = await (0, my_psp22_1.setupPSP22)();
            const defaultSigner = signers_1.Signers.defaultSigner;
            const bob = signers_1.Signers.Bob;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(0);
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, consts_1.TOKEN_ID, consts_1.PRICE)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(1);
            await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
                id: 0,
                creator: bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Custom(psp22.address),
                status: marketplace_2.ListingStatus.onSale,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
            await (0, chai_1.expect)(psp22.withSigner(signers_1.Signers.Alice).tx.approve(contract.address, consts_1.PRICE_WITH_FEE)).to.eventually.be
                .fulfilled;
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.buyNft(0)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(1);
            await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
                id: 0,
                creator: bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Custom(psp22.address),
                status: marketplace_2.ListingStatus.sold,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
            await (0, chai_1.expect)(nft.query.ownerOf(consts_1.TOKEN_ID)).to.have.returnValue(signers_1.Signers.Alice.address);
            await (0, chai_1.expect)(psp22.query.balanceOf(signers_1.Signers.Alice.address)).to.have.returnNumber(my_psp22_1.INITIAL_BALANCE - consts_1.PRICE_WITH_FEE);
            await (0, chai_1.expect)(psp22.query.balanceOf(bob.address)).to.have.returnNumber(my_psp22_1.INITIAL_BALANCE + consts_1.PRICE);
            await (0, chai_1.expect)(psp22.query.balanceOf(defaultSigner.address)).to.have.returnNumber(my_psp22_1.INITIAL_BALANCE + consts_1.PRICE_WITH_FEE - consts_1.PRICE);
        });
        it('Buy multiple NFTs from different listings.', async () => {
            const contract = await (0, marketplace_4.setupMarketplace)();
            const nft = await (0, arch_nft_1.setupArchNFT)();
            const psp22 = await (0, my_psp22_1.setupPSP22)();
            const defaultSigner = signers_1.Signers.defaultSigner;
            const bob = signers_1.Signers.Bob;
            const alice = signers_1.Signers.Alice;
            const TOKEN_ID_1 = marketplace_1.IdBuilder.U8(1);
            const TOKEN_ID_2 = marketplace_1.IdBuilder.U8(2);
            const TOKEN_ID_3 = marketplace_1.IdBuilder.U8(3);
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(0);
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, TOKEN_ID_1, consts_1.PRICE)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, TOKEN_ID_2, consts_1.PRICE)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, TOKEN_ID_3, consts_1.PRICE)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(3);
            await (0, chai_1.expect)(psp22.withSigner(alice).tx.approve(contract.address, 3 * consts_1.PRICE_WITH_FEE)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.withSigner(alice).tx.buyBatch([0, 1, 2])).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(3);
            await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
                id: 0,
                creator: bob.address,
                collection: nft.address,
                tokenId: TOKEN_ID_1,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Custom(psp22.address),
                status: marketplace_2.ListingStatus.sold,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
            await (0, chai_1.expect)(contract.query.getListingByIndex(1)).to.have.deepReturnValue({
                id: 1,
                creator: bob.address,
                collection: nft.address,
                tokenId: TOKEN_ID_2,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Custom(psp22.address),
                status: marketplace_2.ListingStatus.sold,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
            await (0, chai_1.expect)(contract.query.getListingByIndex(2)).to.have.deepReturnValue({
                id: 2,
                creator: bob.address,
                collection: nft.address,
                tokenId: TOKEN_ID_3,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Custom(psp22.address),
                status: marketplace_2.ListingStatus.sold,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
            await (0, chai_1.expect)(nft.query.ownerOf(TOKEN_ID_1)).to.have.returnValue(alice.address);
            await (0, chai_1.expect)(nft.query.ownerOf(TOKEN_ID_2)).to.have.returnValue(alice.address);
            await (0, chai_1.expect)(nft.query.ownerOf(TOKEN_ID_3)).to.have.returnValue(alice.address);
            await (0, chai_1.expect)(psp22.query.balanceOf(alice.address)).to.have.returnNumber(my_psp22_1.INITIAL_BALANCE - 3 * consts_1.PRICE_WITH_FEE);
            await (0, chai_1.expect)(psp22.query.balanceOf(bob.address)).to.have.returnNumber(my_psp22_1.INITIAL_BALANCE + 3 * consts_1.PRICE);
            await (0, chai_1.expect)(psp22.query.balanceOf(defaultSigner.address)).to.have.returnNumber(my_psp22_1.INITIAL_BALANCE + 3 * (consts_1.PRICE_WITH_FEE - consts_1.PRICE));
        });
    });
    (0, mocha_1.describe)('Native currency', () => {
        it('List a new NFT for sale', async () => {
            const contract = await (0, marketplace_4.setupMarketplace)();
            const nft = await (0, arch_nft_1.setupArchNFT)();
            const psp22 = await (0, my_psp22_1.setupPSP22)();
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(0);
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, consts_1.TOKEN_ID, consts_1.PRICE, true)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(1);
            await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
                id: 0,
                creator: signers_1.Signers.Bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Native(),
                status: marketplace_2.ListingStatus.onSale,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
        });
        it('Buy an NFT from a listing.', async () => {
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
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.buyNft(0, { value: consts_1.PRICE_WITH_FEE })).to.eventually.be
                .fulfilled;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(1);
            await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
                id: 0,
                creator: bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Native(),
                status: marketplace_2.ListingStatus.sold,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
            await (0, chai_1.expect)(nft.query.ownerOf(consts_1.TOKEN_ID)).to.have.returnValue(signers_1.Signers.Alice.address);
            const balanceAfterCreator = await getBalance(defaultSigner);
            // let balanceAfterAlice = await getBalance(alice);
            const balanceAfterBob = await getBalance(bob);
            const PRICE_WITH_FEE_BN = new bn_js_1.default(consts_1.PRICE_WITH_FEE);
            const PRICE_BN = new bn_js_1.default(consts_1.PRICE);
            (0, chai_1.expect)(balanceAfterCreator.toString()).to.be.equal(balanceBeforeCreator.add(PRICE_WITH_FEE_BN).sub(PRICE_BN).toString());
            // Gas fee is not deterministic (Alice)
            (0, chai_1.expect)(balanceAfterBob.toString()).to.be.equal(balanceBeforeBob.add(PRICE_BN).toString());
        });
        it('Buy batch of NFTs from a listing.', async () => {
            const contract = await (0, marketplace_4.setupMarketplace)();
            const nft = await (0, arch_nft_1.setupArchNFT)();
            const psp22 = await (0, my_psp22_1.setupPSP22)();
            const defaultSigner = signers_1.Signers.defaultSigner;
            const bob = signers_1.Signers.Bob;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(0);
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, consts_1.TOKEN_ID, consts_1.PRICE, true)).to.eventually.be.fulfilled;
            await (0, chai_1.expect)((0, marketplace_3.mintAndList)(contract, nft, psp22, consts_1.TOKEN_ID_2, consts_1.PRICE, true)).to.eventually.be.fulfilled;
            const balanceBeforeCreator = await getBalance(defaultSigner);
            const balanceBeforeBob = await getBalance(bob);
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(2);
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
            await (0, chai_1.expect)(contract.query.getListingByIndex(1)).to.have.deepReturnValue({
                id: 1,
                creator: bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID_2,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Native(),
                status: marketplace_2.ListingStatus.onSale,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
            await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Alice).tx.buyBatch([0, 1], { value: consts_1.PRICE_WITH_FEE * 2 })).to.eventually
                .be.fulfilled;
            await (0, chai_1.expect)(contract.query.getListingCount()).to.have.returnNumber(2);
            await (0, chai_1.expect)(contract.query.getListingByIndex(0)).to.have.deepReturnValue({
                id: 0,
                creator: bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Native(),
                status: marketplace_2.ListingStatus.sold,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
            await (0, chai_1.expect)(contract.query.getListingByIndex(1)).to.have.deepReturnValue({
                id: 1,
                creator: bob.address,
                collection: nft.address,
                tokenId: consts_1.TOKEN_ID_2,
                price: consts_1.PRICE,
                currency: marketplace_1.CurrencyBuilder.Native(),
                status: marketplace_2.ListingStatus.sold,
                royalty: creator_1.COLLECTION_ROYALTY,
            });
            await (0, chai_1.expect)(nft.query.ownerOf(consts_1.TOKEN_ID)).to.have.returnValue(signers_1.Signers.Alice.address);
            await (0, chai_1.expect)(nft.query.ownerOf(consts_1.TOKEN_ID_2)).to.have.returnValue(signers_1.Signers.Alice.address);
            const balanceAfterCreator = await getBalance(defaultSigner);
            const balanceAfterBob = await getBalance(bob);
            const PRICE_WITH_FEE_BN = new bn_js_1.default(consts_1.PRICE_WITH_FEE);
            const PRICE_BN = new bn_js_1.default(consts_1.PRICE);
            (0, chai_1.expect)(balanceAfterCreator.toString()).to.be.equal(balanceBeforeCreator
                .add(PRICE_WITH_FEE_BN.mul(new bn_js_1.default(2)))
                .sub(PRICE_BN.mul(new bn_js_1.default(2)))
                .toString());
            // Gas fee is not deterministic (Alice)
            (0, chai_1.expect)(balanceAfterBob.toString()).to.be.equal(balanceBeforeBob.add(PRICE_BN.mul(new bn_js_1.default(2))).toString());
        });
    });
    (0, mocha_1.after)(async () => {
        await api_singleton_1.default.disconnect();
    });
});
//# sourceMappingURL=marketplace.spec.js.map