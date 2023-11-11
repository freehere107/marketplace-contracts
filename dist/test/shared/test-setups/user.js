"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupUser = void 0;
// SPDX-License-Identifier: MIT
const user_1 = __importDefault(require("../../../typechain-generated/constructors/user"));
const user_2 = __importDefault(require("../../../typechain-generated/contracts/user"));
const api_singleton_1 = __importDefault(require("../api_singleton"));
const signers_1 = require("../signers");
async function setupUser() {
    const api = await api_singleton_1.default.getInstance();
    const defaultSigner = signers_1.Signers.defaultSigner;
    const constructors = new user_1.default(api, defaultSigner);
    const { address } = await constructors.new(defaultSigner.address);
    return new user_2.default(address, defaultSigner, api);
}
exports.setupUser = setupUser;
//# sourceMappingURL=user.js.map