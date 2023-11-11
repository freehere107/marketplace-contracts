"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const bn_js_1 = __importDefault(require("bn.js"));
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const signers_1 = require("../shared/signers");
const admin_access_1 = require("../shared/test-setups/admin_access");
const ADD_ADMIN_MAX_FEE = new bn_js_1.default(3000000000);
const REMOVE_ADMIN_MAX_FEE = new bn_js_1.default(3000000000);
describe(consts_1.PERFORMANCE_PREFIX + 'AdminAccess contract', function () {
    let contract;
    beforeEach(async function () {
        contract = await (0, admin_access_1.setupAdminAccess)();
    });
    after(async function () {
        await api_singleton_1.default.disconnect();
    });
    it('Add admin', async function () {
        await (0, chai_1.expect)(contract.query.addAdmin(signers_1.Signers.Alice.address)).to.have.feeLessThan(ADD_ADMIN_MAX_FEE);
    });
    it('Remove admin', async function () {
        await contract.query.addAdmin(signers_1.Signers.Alice.address);
        await (0, chai_1.expect)(contract.query.removeAdmin(signers_1.Signers.Alice.address)).to.have.feeLessThan(REMOVE_ADMIN_MAX_FEE);
    });
});
//# sourceMappingURL=admin_access.spec.js.map