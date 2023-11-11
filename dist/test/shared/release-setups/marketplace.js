"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMarketplace = void 0;
// SPDX-License-Identifier: MIT
const marketplace_1 = __importDefault(require("../../../typechain-generated/constructors/marketplace"));
const marketplace_2 = __importDefault(require("../../../typechain-generated/contracts/marketplace"));
const api_singleton_1 = __importDefault(require("../api_singleton"));
const signers_1 = require("../signers");
const shared_1 = require("./shared");
async function setupMarketplace() {
    const api = await api_singleton_1.default.getInstance();
    const defaultSigner = signers_1.Signers.defaultSigner;
    const constructors = new marketplace_1.default(api, defaultSigner);
    const { address } = await constructors.new(defaultSigner.address, { gasLimit: (0, shared_1.gasLimit)(780000000, 19000) });
    return new marketplace_2.default(address, defaultSigner, api);
}
exports.setupMarketplace = setupMarketplace;
//# sourceMappingURL=marketplace.js.map