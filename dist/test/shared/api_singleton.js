"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// SPDX-License-Identifier: MIT
const api_1 = require("@polkadot/api");
class ApiSingleton {
    static async getInstance() {
        if (!ApiSingleton.instance) {
            ApiSingleton.instance = await api_1.ApiPromise.create();
        }
        return ApiSingleton.instance;
    }
    static getInstanceSync() {
        if (!ApiSingleton.instance) {
            throw new Error('ApiSingleton is not initialized');
        }
        return ApiSingleton.instance;
    }
    static async disconnect() {
        if (ApiSingleton.instance) {
            await ApiSingleton.instance.disconnect();
        }
        ApiSingleton.instance = undefined;
    }
    static async initWithApi(api) {
        ApiSingleton.instance = api;
    }
}
exports.default = ApiSingleton;
//# sourceMappingURL=api_singleton.js.map