"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAccountManager = void 0;
// SPDX-License-Identifier: MIT
const creator_json_1 = __importDefault(require("../../../artifacts/creator.json"));
const user_json_1 = __importDefault(require("../../../artifacts/user.json"));
const account_manager_1 = __importDefault(require("../../../typechain-generated/constructors/account_manager"));
const account_manager_2 = __importDefault(require("../../../typechain-generated/contracts/account_manager"));
const api_singleton_1 = __importDefault(require("../api_singleton"));
const signers_1 = require("../signers");
const shared_1 = require("./shared");
async function setupAccountManager() {
    const api = await api_singleton_1.default.getInstance();
    const defaultSigner = signers_1.Signers.defaultSigner;
    const constructors = new account_manager_1.default(api, defaultSigner);
    const { address } = await constructors.new(user_json_1.default.source.hash, creator_json_1.default.source.hash, {
        gasLimit: (0, shared_1.gasLimit)(2500000000, 36000),
    });
    return new account_manager_2.default(address, defaultSigner, api);
}
exports.setupAccountManager = setupAccountManager;
//# sourceMappingURL=account_manager.js.map