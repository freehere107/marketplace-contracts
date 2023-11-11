"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupPSP22 = void 0;
// SPDX-License-Identifier: MIT
const my_psp22_1 = __importDefault(require("../../../typechain-generated/constructors/my_psp22"));
const my_psp22_2 = __importDefault(require("../../../typechain-generated/contracts/my_psp22"));
const api_singleton_1 = __importDefault(require("../api_singleton"));
const signers_1 = require("../signers");
const shared_1 = require("./shared");
async function setupPSP22() {
    const api = await api_singleton_1.default.getInstance();
    const defaultSigner = signers_1.Signers.defaultSigner;
    const constructors = new my_psp22_1.default(api, defaultSigner);
    const { address } = await constructors.new({ gasLimit: (0, shared_1.gasLimit)(140000000, 17000) });
    const contract = new my_psp22_2.default(address, defaultSigner, api);
    return contract;
}
exports.setupPSP22 = setupPSP22;
//# sourceMappingURL=my_psp22.js.map