"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupArchNFT = exports.COLLECTION_NAME = exports.COLLECTION_URI = exports.ADDITIONAL_INFO = void 0;
// SPDX-License-Identifier: MIT
const arch_nft_1 = __importDefault(require("../../../typechain-generated/constructors/arch_nft"));
const arch_nft_2 = __importDefault(require("../../../typechain-generated/contracts/arch_nft"));
const api_singleton_1 = __importDefault(require("../api_singleton"));
const signers_1 = require("../signers");
exports.ADDITIONAL_INFO = JSON.stringify({
    image: 'ipfs://arch-nft.com/1.png',
    name: 'Arch NFT Pilot Collection',
    description: 'Arch NFT Pilot Collection',
});
exports.COLLECTION_URI = 'ipfs://arch-nft.com/';
exports.COLLECTION_NAME = 'Arch NFT Pilot Collection';
async function setupArchNFT() {
    const api = await api_singleton_1.default.getInstance();
    const defaultSigner = signers_1.Signers.defaultSigner;
    const constructors = new arch_nft_1.default(api, defaultSigner);
    const { address } = await constructors.new(100, exports.COLLECTION_NAME, exports.COLLECTION_URI, exports.ADDITIONAL_INFO);
    return new arch_nft_2.default(address, defaultSigner, api);
}
exports.setupArchNFT = setupArchNFT;
//# sourceMappingURL=arch_nft.js.map