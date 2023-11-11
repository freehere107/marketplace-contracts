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
(0, mocha_1.describe)(consts_1.SECURITY_PREFIX + 'AdminAccess', function () {
    let adminAccess;
    let alice, bob;
    beforeEach(async function () {
        adminAccess = await (0, admin_access_1.setupAdminAccess)();
        alice = signers_1.Signers.Alice;
        bob = signers_1.Signers.Bob;
    });
    after(async function () {
        await api_singleton_1.default.disconnect();
    });
    it('Cannot remove admin if not admin', async function () {
        await (0, chai_1.expect)(adminAccess.tx.removeAdmin(bob.address)).to.eventually.be.rejected;
    });
    it('Cannot add admin if not admin', async function () {
        await (0, chai_1.expect)(adminAccess.withSigner(alice).tx.addAdmin(bob.address)).to.eventually.be.rejected;
    });
    it('Cannot remove admin if not admin', async function () {
        await (0, chai_1.expect)(adminAccess.withSigner(alice).tx.removeAdmin(bob.address)).to.eventually.be.rejected;
    });
});
//# sourceMappingURL=admin_access.spec.js.map