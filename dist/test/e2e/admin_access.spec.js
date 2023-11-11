"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const chai_1 = require("../shared/chai");
const consts_1 = require("../shared/consts");
const signers_1 = require("../shared/signers");
const admin_access_1 = require("../shared/test-setups/admin_access");
(0, mocha_1.describe)(consts_1.E2E_PREFIX + 'AdminAccess', function () {
    let adminAccess;
    let bob;
    beforeEach(async function () {
        adminAccess = await (0, admin_access_1.setupAdminAccess)();
        bob = signers_1.Signers.Bob;
    });
    after(async function () {
        await api_singleton_1.default.disconnect();
    });
    it('Can set admin', async function () {
        await (0, chai_1.expect)(adminAccess.tx.addAdmin(bob.address)).to.eventually.be.fulfilled;
    });
    it('Can remove admin', async function () {
        await (0, chai_1.expect)(adminAccess.tx.addAdmin(bob.address)).to.eventually.be.fulfilled;
        await (0, chai_1.expect)(adminAccess.tx.removeAdmin(bob.address)).to.eventually.be.fulfilled;
    });
    it('Check if admin', async function () {
        await (0, chai_1.expect)(adminAccess.tx.addAdmin(bob.address)).to.eventually.be.fulfilled;
        await (0, chai_1.expect)(adminAccess.query.isAdmin(bob.address)).to.have.returnValue(true);
    });
});
//# sourceMappingURL=admin_access.spec.js.map