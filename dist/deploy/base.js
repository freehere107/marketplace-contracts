"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base = void 0;
// SPDX-License-Identifier: MIT
const account_manager_1 = require("../test/shared/test-setups/account_manager");
const marketplace_1 = require("../test/shared/test-setups/marketplace");
const my_psp22_1 = require("../test/shared/test-setups/my_psp22");
async function base() {
    const accountManager = await (0, account_manager_1.setupAccountManager)();
    const psp22 = await (0, my_psp22_1.setupPSP22)();
    const marketplace = await (0, marketplace_1.setupMarketplace)();
    /* eslint-disable no-console */
    console.log({
        AccountManager: accountManager.address,
        PSP22: psp22.address,
        Marketplace: marketplace.address,
    });
}
exports.base = base;
//# sourceMappingURL=base.js.map