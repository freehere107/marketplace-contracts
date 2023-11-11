"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const mocha_1 = require("mocha");
const arch_nft_1 = __importDefault(require("../../typechain-generated/constructors/arch_nft"));
const arch_nft_2 = require("../../typechain-generated/types-arguments/arch_nft");
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const signers_1 = require("../shared/signers");
const arch_nft_3 = require("../shared/test-setups/arch_nft");
const creator_1 = require("../shared/test-setups/creator");
(0, mocha_1.describe)(consts_1.SECURITY_PREFIX + 'Arch NFT', () => {
    it('Metadata works', async () => {
        const contract = await (0, arch_nft_3.setupArchNFT)();
        await (0, chai_1.expect)(contract.query.collectionRoyalty()).to.have.returnValue(100);
        await (0, chai_1.expect)(contract.query.collectionName()).to.have.returnValue(creator_1.COLLECTION_NAME);
        await (0, chai_1.expect)(contract.query.collectionUri()).to.have.returnValue(creator_1.COLLECTION_URI);
        await (0, chai_1.expect)(contract.query.collectionAdditionalInfo()).to.have.returnValue(creator_1.ADDITIONAL_INFO);
    });
    it('Cannot set royalty more than 10000', async () => {
        const api = await api_singleton_1.default.getInstance();
        const defaultSigner = signers_1.Signers.defaultSigner;
        const constructors = new arch_nft_1.default(api, defaultSigner);
        await (0, chai_1.expect)(constructors.new(10001, creator_1.COLLECTION_NAME, creator_1.COLLECTION_URI, creator_1.ADDITIONAL_INFO)).to.eventually.be.rejected;
    });
    it('Cannot mint NFT if not owner', async () => {
        const contract = await (0, arch_nft_3.setupArchNFT)();
        await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.mint(signers_1.Signers.Alice.address, arch_nft_2.IdBuilder.U8(1))).to.eventually.be.rejected;
    });
    it('Cannot transfer NFT if not owner', async () => {
        const contract = await (0, arch_nft_3.setupArchNFT)();
        const alice = signers_1.Signers.Alice;
        const bob = signers_1.Signers.Bob;
        await contract.tx.mint(alice.address, arch_nft_2.IdBuilder.U8(1));
        await (0, chai_1.expect)(contract.withSigner(bob).tx.transfer(bob.address, arch_nft_2.IdBuilder.U8(1), [])).to.eventually.be.rejected;
    });
    it('Cannot burn NFT if not owner', async () => {
        const contract = await (0, arch_nft_3.setupArchNFT)();
        const { Alice: alice, Bob: bob } = signers_1.Signers;
        await contract.tx.mint(alice.address, arch_nft_2.IdBuilder.U8(1));
        await (0, chai_1.expect)(contract.withSigner(bob).tx.burn(alice.address, arch_nft_2.IdBuilder.U8(1))).to.eventually.be.rejected;
    });
    it('Cannot set collection name if not owner', async () => {
        const contract = await (0, arch_nft_3.setupArchNFT)();
        await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.setCollectionName('New name')).to.eventually.be.rejected;
    });
    it('Cannot set collection uri if not owner', async () => {
        const contract = await (0, arch_nft_3.setupArchNFT)();
        await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.setCollectionUri('New uri')).to.eventually.be.rejected;
    });
    it('Cannot set collection additional info if not owner', async () => {
        const contract = await (0, arch_nft_3.setupArchNFT)();
        await (0, chai_1.expect)(contract.withSigner(signers_1.Signers.Bob).tx.setCollectionAdditionalInfo('New info')).to.eventually.be.rejected;
    });
    it('Cannot mint NFT if already minted', async () => {
        const contract = await (0, arch_nft_3.setupArchNFT)();
        const alice = signers_1.Signers.Alice;
        await contract.tx.mint(alice.address, arch_nft_2.IdBuilder.U8(1));
        await (0, chai_1.expect)(contract.tx.mint(alice.address, arch_nft_2.IdBuilder.U8(1))).to.eventually.be.rejected;
    });
    (0, mocha_1.after)(async () => {
        await api_singleton_1.default.disconnect();
    });
});
//# sourceMappingURL=arch_nft.spec.js.map