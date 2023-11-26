"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const mocha_1 = require("mocha");
const collection_fabric_1 = require("../../typechain-generated/types-returns/collection_fabric");
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const collection_fabric_2 = require("../shared/test-setups/collection_fabric");
(0, mocha_1.describe)(consts_1.E2E_PREFIX + 'Collection fabric', () => {
    it('Can create collection', async () => {
        const contract = await (0, collection_fabric_2.setupCollectionFabric)();
        await (0, chai_1.expect)(contract.query.collectionCount()).to.have.returnNumber(0);
        await contract.tx.instantiateCollection({
            name: collection_fabric_2.COLLECTION_NAME,
            uri: collection_fabric_2.COLLECTION_URI,
            royalty: collection_fabric_2.COLLECTION_ROYALTY,
            additionalInfo: collection_fabric_2.ADDITIONAL_INFO,
        }, collection_fabric_2.COLLECTION_CODE_HASH);
        await (0, chai_1.expect)(contract.query.collectionCount()).to.have.returnNumber(1);
    });
    it('Can ban collection', async () => {
        const contract = await (0, collection_fabric_2.setupCollectionFabric)();
        await contract.tx.instantiateCollection({
            name: collection_fabric_2.COLLECTION_NAME,
            uri: collection_fabric_2.COLLECTION_URI,
            royalty: collection_fabric_2.COLLECTION_ROYALTY,
            additionalInfo: collection_fabric_2.ADDITIONAL_INFO,
        }, collection_fabric_2.COLLECTION_CODE_HASH);
        const collection = (await contract.query.collection(0)).value.unwrapRecursively();
        await (0, chai_1.expect)(contract.query.isBanned(collection)).to.have.returnValue(false);
        await contract.tx.banCollection(collection);
        await (0, chai_1.expect)(contract.query.isBanned(collection)).to.have.returnValue(true);
    });
    it('Can unban collection', async () => {
        const contract = await (0, collection_fabric_2.setupCollectionFabric)();
        await contract.tx.instantiateCollection({
            name: collection_fabric_2.COLLECTION_NAME,
            uri: collection_fabric_2.COLLECTION_URI,
            royalty: collection_fabric_2.COLLECTION_ROYALTY,
            additionalInfo: collection_fabric_2.ADDITIONAL_INFO,
        }, collection_fabric_2.COLLECTION_CODE_HASH);
        const collection = (await contract.query.collection(0)).value.unwrapRecursively();
        await (0, chai_1.expect)(contract.query.isBanned(collection)).to.have.returnValue(false);
        await contract.tx.banCollection(collection);
        await (0, chai_1.expect)(contract.query.isBanned(collection)).to.have.returnValue(true);
        await contract.tx.unbanCollection(collection);
        await (0, chai_1.expect)(contract.query.isBanned(collection)).to.have.returnValue(false);
    });
    it('Can ban codehash', async () => {
        const contract = await (0, collection_fabric_2.setupCollectionFabric)();
        await (0, chai_1.expect)(contract.query.isCodehashBanned(collection_fabric_2.COLLECTION_CODE_HASH)).to.have.returnValue(false);
        await contract.tx.banCodehash(collection_fabric_2.COLLECTION_CODE_HASH);
        await (0, chai_1.expect)(contract.query.isCodehashBanned(collection_fabric_2.COLLECTION_CODE_HASH)).to.have.returnValue(true);
        const { err } = (await contract.query.instantiateCollection({
            name: collection_fabric_2.COLLECTION_NAME,
            uri: collection_fabric_2.COLLECTION_URI,
            royalty: collection_fabric_2.COLLECTION_ROYALTY,
            additionalInfo: collection_fabric_2.ADDITIONAL_INFO,
        }, collection_fabric_2.COLLECTION_CODE_HASH)).value.unwrap();
        (0, chai_1.expect)(err).to.be.not.null;
        (0, chai_1.expect)(err).to.be.deep.eq(collection_fabric_1.ArchisinalErrorBuilder.CodehashIsBanned());
    });
    it('Can unban codehash', async () => {
        const contract = await (0, collection_fabric_2.setupCollectionFabric)();
        await contract.tx.banCodehash(collection_fabric_2.COLLECTION_CODE_HASH);
        await (0, chai_1.expect)(contract.query.isCodehashBanned(collection_fabric_2.COLLECTION_CODE_HASH)).to.have.returnValue(true);
        await contract.tx.unbanCodehash(collection_fabric_2.COLLECTION_CODE_HASH);
        await (0, chai_1.expect)(contract.query.isCodehashBanned(collection_fabric_2.COLLECTION_CODE_HASH)).to.have.returnValue(false);
    });
    (0, mocha_1.after)(async () => {
        await api_singleton_1.default.disconnect();
    });
});
//# sourceMappingURL=collection_fabric.spec.js.map