import { IdBuilder } from '../../typechain-generated/types-arguments/marketplace'

const PRICE = 1_000
const PRICE_WITH_FEE = 1_010
const MIN_BID_STEP = 1
const TOKEN_ID = IdBuilder.U8(1)
const TOKEN_ID_1 = IdBuilder.U8(1)
const TOKEN_ID_2 = IdBuilder.U8(2)
const TOKEN_ID_3 = IdBuilder.U8(3)

const PERFORMANCE_PREFIX = '\x1b[1m\x1b[33m[PERFORMANCE]\x1b[0m ';

export { PRICE, PRICE_WITH_FEE, MIN_BID_STEP, TOKEN_ID, TOKEN_ID_1, TOKEN_ID_2, TOKEN_ID_3, PERFORMANCE_PREFIX }