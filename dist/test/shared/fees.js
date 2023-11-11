"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateFee = void 0;
const api_singleton_1 = __importDefault(require("./api_singleton"));
async function calculateFee(weight) {
    const api = await api_singleton_1.default.getInstance();
    const fee = await api.call.transactionPaymentApi.queryWeightToFee(weight);
    return fee;
}
exports.calculateFee = calculateFee;
//# sourceMappingURL=fees.js.map