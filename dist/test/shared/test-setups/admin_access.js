"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupAdminAccess = void 0;
// SPDX-License-Identifier: MIT
const my_admin_access_1 = __importDefault(require("../../../typechain-generated/constructors/my_admin_access"));
const my_admin_access_2 = __importDefault(require("../../../typechain-generated/contracts/my_admin_access"));
const api_singleton_1 = __importDefault(require("../api_singleton"));
const signers_1 = require("../signers");
async function setupAdminAccess() {
    const api = await api_singleton_1.default.getInstance();
    const defaultSigner = signers_1.Signers.defaultSigner;
    const constructors = new my_admin_access_1.default(api, defaultSigner);
    const { address } = await constructors.new();
    return new my_admin_access_2.default(address, defaultSigner, api);
}
exports.setupAdminAccess = setupAdminAccess;
//# sourceMappingURL=admin_access.js.map