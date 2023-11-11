"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const api_singleton_1 = __importDefault(require("../test/shared/api_singleton"));
const base_1 = require("./base");
async function local() {
    await (0, base_1.base)();
    await api_singleton_1.default.disconnect();
}
local().then(() => process.exit(0)).catch(error => {
    /* eslint-disable no-console */
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=local.js.map