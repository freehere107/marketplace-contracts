"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gasLimit = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const api_singleton_1 = __importDefault(require("../api_singleton"));
function gasLimit(refTime, proofSize) {
    const api = api_singleton_1.default.getInstanceSync();
    const registry = api.registry;
    return {
        refTime: registry.createType("Compact<u64>", new bn_js_1.default(refTime)),
        proofSize: registry.createType("Compact<u64>", new bn_js_1.default(proofSize)),
    };
}
exports.gasLimit = gasLimit;
//# sourceMappingURL=shared.js.map