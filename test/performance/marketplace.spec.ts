import { describe } from 'mocha'
import {PERFORMANCE_PREFIX} from "../shared/consts";

const LIST_NFT_FOR_SALE_MAX_FEE = 0;
const CANCEL_LISTING_MAX_FEE = 0;
const BUY_NFT_MAX_FEE = 0;
const BUY_BATCH_MAX_FEE = 0;

describe(PERFORMANCE_PREFIX + 'Marketplace', function() {
    it('Should list NFT for sale within max fee', async function() {
        // Test logic for list_nft_for_sale
        // Make sure that the fee does not exceed LIST_NFT_FOR_SALE_MAX_FEE
    });

    it('Should cancel listing within max fee', async function() {
        // Test logic for cancel_listing
        // Make sure that the fee does not exceed CANCEL_LISTING_MAX_FEE
    });

    it('Should buy NFT within max fee', async function() {
        // Test logic for buy_nft
        // Make sure that the fee does not exceed BUY_NFT_MAX_FEE
    });

    it('Should buy batch within max fee', async function() {
        // Test logic for buy_batch
        // Make sure that the fee does not exceed BUY_BATCH_MAX_FEE
    });
});
