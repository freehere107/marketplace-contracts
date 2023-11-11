"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.assert = void 0;
const chai_1 = __importStar(require("chai"));
const chai_as_promised_1 = __importDefault(require("chai-as-promised"));
const fees_1 = require("./fees");
chai_1.default.use(chai_as_promised_1.default);
chai_1.Assertion.addMethod('returnValue', function (expected) {
    const obj = this._obj;
    return new Promise((resolve, reject) => {
        obj
            .then((result) => {
            const unwrappedValue = result.value.unwrapRecursively();
            this.assert(unwrappedValue === expected, 'expected #{this} to have a return value #{exp} but got #{act}', 'expected #{this} to not have a return value #{act}', expected, unwrappedValue);
            resolve(unwrappedValue);
        })
            .catch((error) => {
            reject(error);
        });
    });
});
chai_1.Assertion.addMethod('deepReturnValue', function (expected) {
    const obj = this._obj;
    return new Promise((resolve, reject) => {
        obj
            .then((result) => {
            const unwrappedValue = result.value.unwrapRecursively();
            this.assert(JSON.stringify(unwrappedValue) === JSON.stringify(expected), 'expected #{this} to have a return value #{exp} but got #{act}', 'expected #{this} to not have a return value #{act}', JSON.stringify(expected), JSON.stringify(unwrappedValue));
            resolve(unwrappedValue);
        })
            .catch((error) => {
            reject(error);
        });
    });
});
chai_1.Assertion.addMethod('returnNumber', function (expected) {
    const obj = this._obj;
    return new Promise((resolve, reject) => {
        obj
            .then((result) => {
            const unwrappedValue = result.value.unwrapRecursively().toNumber();
            this.assert(unwrappedValue === expected, 'expected #{this} to have a return value #{exp} but got #{act}', 'expected #{this} to not have a return value #{act}', expected, unwrappedValue);
            resolve(unwrappedValue);
        })
            .catch((error) => {
            reject(error);
        });
    });
});
chai_1.default.Assertion.addMethod('feeLessThan', function (expected) {
    const obj = this._obj;
    return obj
        .then(async (result) => {
        const unwrappedValue = result.gasConsumed;
        const fee = await (0, fees_1.calculateFee)(unwrappedValue); //ensure calculateFee is defined somewhere
        this.assert(fee.lt(expected), `expected ${this} to have a fee less than ${expected} but got ${fee}`, `expected ${this} to not have a fee less than ${fee}`, expected.toString(), fee.toString());
    })
        .catch((error) => {
        throw error;
    });
});
exports.assert = chai_1.default.assert;
exports.expect = chai_1.default.expect;
//# sourceMappingURL=chai.js.map