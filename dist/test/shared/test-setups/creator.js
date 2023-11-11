"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCreator = exports.COLLECTION_CODE_HASH = exports.COLLECTION_ROYALTY = exports.COLLECTION_NAME = exports.COLLECTION_URI = exports.ADDITIONAL_INFO = void 0;
// SPDX-License-Identifier: MIT
const arch_nft_json_1 = __importDefault(require("../../../artifacts/arch_nft.json"));
const creator_1 = __importDefault(require("../../../typechain-generated/constructors/creator"));
const creator_2 = __importDefault(require("../../../typechain-generated/contracts/creator"));
const api_singleton_1 = __importDefault(require("../api_singleton"));
const signers_1 = require("../signers");
const arch_nft_1 = require("./arch_nft");
exports.ADDITIONAL_INFO = JSON.stringify({
    image: 'ipfs://arch-nft.com/1.png',
    name: 'Arch NFT Pilot Collection',
    description: 'Arch NFT Pilot Collection',
});
exports.COLLECTION_URI = 'ipfs://arch-nft.com/';
exports.COLLECTION_NAME = 'Arch NFT Pilot Collection';
exports.COLLECTION_ROYALTY = 100;
exports.COLLECTION_CODE_HASH = arch_nft_json_1.default.source.hash;
async function setupCreator() {
    const api = await api_singleton_1.default.getInstance();
    const defaultSigner = signers_1.Signers.defaultSigner;
    await (0, arch_nft_1.setupArchNFT)();
    const constructors = new creator_1.default(api, defaultSigner);
    const { address } = await constructors.new(defaultSigner.address);
    return new creator_2.default(address, defaultSigner, api);
}
exports.setupCreator = setupCreator;
//# sourceMappingURL=creator.js.map