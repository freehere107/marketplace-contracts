"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMockAuction = void 0;
// SPDX-License-Identifier: MIT
const mock_auction_1 = __importDefault(require("../../../typechain-generated/constructors/mock_auction"));
const mock_auction_2 = __importDefault(require("../../../typechain-generated/contracts/mock_auction"));
const api_singleton_1 = __importDefault(require("../api_singleton"));
const signers_1 = require("../signers");
async function setupMockAuction() {
    const api = await api_singleton_1.default.getInstance();
    const defaultSigner = signers_1.Signers.defaultSigner;
    const constructors = new mock_auction_1.default(api, defaultSigner);
    const { address } = await constructors.new(defaultSigner.address);
    return new mock_auction_2.default(address, defaultSigner, api);
}
exports.setupMockAuction = setupMockAuction;
//# sourceMappingURL=mock_auction.js.map