"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAccountManager = void 0;
// SPDX-License-Identifier: MIT
const account_manager_1 = __importDefault(require("../../../typechain-generated/constructors/account_manager"));
const account_manager_2 = __importDefault(require("../../../typechain-generated/contracts/account_manager"));
const api_singleton_1 = __importDefault(require("../api_singleton"));
const signers_1 = require("../signers");
const creator_1 = require("./creator");
const user_1 = require("./user");
async function setupAccountManager() {
    const api = await api_singleton_1.default.getInstance();
    const defaultSigner = signers_1.Signers.defaultSigner;
    const creator = await (0, creator_1.setupCreator)();
    const user = await (0, user_1.setupUser)();
    const constructors = new account_manager_1.default(api, defaultSigner);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { address } = await constructors.new(user.contractAbi.json.source.hash, creator.contractAbi.json.source.hash);
    return new account_manager_2.default(address, defaultSigner, api);
}
exports.setupAccountManager = setupAccountManager;
//# sourceMappingURL=account_manager.js.map