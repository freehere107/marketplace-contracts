"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = void 0;
// SPDX-License-Identifier: MIT
require("dotenv/config");
const api_singleton_1 = __importDefault(require("../test/shared/api_singleton"));
const account_manager_1 = require("../test/shared/test-setups/account_manager");
const arch_nft_1 = require("../test/shared/test-setups/arch_nft");
const creator_1 = require("../test/shared/test-setups/creator");
const marketplace_1 = require("../test/shared/test-setups/marketplace");
const my_psp22_1 = require("../test/shared/test-setups/my_psp22");
const user_1 = require("../test/shared/test-setups/user");
async function base() {
    const psp22 = await (0, my_psp22_1.setupPSP22)();
    // eslint-disable-next-line no-console
    console.log(`PSP22 deployed at ${psp22.address}`);
    const archNft = await (0, arch_nft_1.setupArchNFT)();
    // eslint-disable-next-line no-console
    console.log(`ArchNFT deployed at ${archNft.address}`);
    const user = await (0, user_1.setupUser)();
    // eslint-disable-next-line no-console
    console.log(`User deployed at ${user.address}`);
    const creator = await (0, creator_1.setupCreator)();
    // eslint-disable-next-line no-console
    console.log(`Creator deployed at ${creator.address}`);
    const marketplace = await (0, marketplace_1.setupMarketplace)();
    // eslint-disable-next-line no-console
    console.log(`Marketplace deployed at ${marketplace.address}`);
    const accountManager = await (0, account_manager_1.setupAccountManager)();
    // eslint-disable-next-line no-console
    console.log(`AccountManager deployed at ${accountManager.address}`);
    await api_singleton_1.default.disconnect();
}
exports.base = base;
//# sourceMappingURL=base.js.map