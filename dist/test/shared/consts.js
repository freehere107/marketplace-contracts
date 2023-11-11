"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_ID_3 = exports.TOKEN_ID_2 = exports.TOKEN_ID_1 = exports.TOKEN_ID = exports.SECURITY_PREFIX = exports.PRICE_WITH_FEE = exports.PRICE = exports.PERFORMANCE_PREFIX = exports.MIN_BID_STEP = exports.E2E_PREFIX = void 0;
// SPDX-License-Identifier: MIT
const marketplace_1 = require("../../typechain-generated/types-arguments/marketplace");
const PRICE = 1000;
exports.PRICE = PRICE;
const PRICE_WITH_FEE = 1010;
exports.PRICE_WITH_FEE = PRICE_WITH_FEE;
const MIN_BID_STEP = 1;
exports.MIN_BID_STEP = MIN_BID_STEP;
const TOKEN_ID = marketplace_1.IdBuilder.U8(1);
exports.TOKEN_ID = TOKEN_ID;
const TOKEN_ID_1 = marketplace_1.IdBuilder.U8(1);
exports.TOKEN_ID_1 = TOKEN_ID_1;
const TOKEN_ID_2 = marketplace_1.IdBuilder.U8(2);
exports.TOKEN_ID_2 = TOKEN_ID_2;
const TOKEN_ID_3 = marketplace_1.IdBuilder.U8(3);
exports.TOKEN_ID_3 = TOKEN_ID_3;
const PERFORMANCE_PREFIX = '\x1b[1m\x1b[33m[PERFORMANCE]\x1b[0m ';
exports.PERFORMANCE_PREFIX = PERFORMANCE_PREFIX;
const SECURITY_PREFIX = '\x1b[1m\x1b[31m[SECURITY]\x1b[0m ';
exports.SECURITY_PREFIX = SECURITY_PREFIX;
const E2E_PREFIX = '\x1b[1m\x1b[32m[E2E]\x1b[0m ';
exports.E2E_PREFIX = E2E_PREFIX;
//# sourceMappingURL=consts.js.map