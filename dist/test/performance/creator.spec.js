"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_singleton_1 = __importDefault(require("../shared/api_singleton"));
const consts_1 = require("../shared/consts");
const creator_1 = require("../shared/test-setups/creator");
describe(consts_1.PERFORMANCE_PREFIX + 'Creator', function () {
    // eslint-disable-next-line no-unused-vars
    let contract;
    beforeEach(async function () {
        contract = await (0, creator_1.setupCreator)();
    });
    after(async function () {
        await api_singleton_1.default.disconnect();
    });
});
//# sourceMappingURL=creator.spec.js.map