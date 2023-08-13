// SPDX-License-Identifier: MIT
import BN from "bn.js";

import PSP34Contract from "../../typechain-generated/contracts/arch_nft";
import Contract from "../../typechain-generated/contracts/marketplace";
import PSP22Contract from "../../typechain-generated/contracts/my_psp22";
import {CurrencyBuilder} from "../../typechain-generated/types-arguments/marketplace";
import ApiSingleton from "../shared/api_singleton";
import {expect} from "../shared/chai";
import {MIN_BID_STEP, PERFORMANCE_PREFIX, PRICE, PRICE_WITH_FEE, TOKEN_ID} from "../shared/consts";
import {genTime, mintAndApprove, mintAndListAuction} from "../shared/marketplace";
import {Signers} from "../shared/signers";
import {setupArchNFT} from "../shared/test-setups/arch_nft";
import {setupMarketplace} from "../shared/test-setups/marketplace";
import {setupPSP22} from "../shared/test-setups/my_psp22";
import {sleep} from "../shared/time";

const LIST_NFT_FOR_AUCTION_MAX_FEE = new BN(14_000_000_000);
const START_AUCTION_MAX_FEE = new BN(4_500_000_000);
const CANCEL_AUCTION_MAX_FEE = new BN(13_500_000_000);
const BID_NFT_MAX_FEE = new BN(3_400_000_000);
const CLAIM_NFT_MAX_FEE = new BN(35_000_000_000);

describe(PERFORMANCE_PREFIX + 'Auction', function() {
    let contract: Contract;
    let psp22: PSP22Contract;
    let psp34: PSP34Contract;

    beforeEach(async function() {
        contract = await setupMarketplace()

        psp22 = await setupPSP22()
        psp34 = await setupArchNFT()

    })

    after(async function() {
        await ApiSingleton.disconnect();
    })

    it('Should list NFT for auction within max fee', async function() {
        await mintAndApprove(contract, psp34, TOKEN_ID, Signers.Charlie);

        const time = genTime(10, 100)

        await expect(contract.query.listNftForAuction(
            Signers.Charlie.address,
            psp34.address,
            TOKEN_ID,
            PRICE,
            MIN_BID_STEP,
            CurrencyBuilder.Custom(psp22.address),
            time.START_TIME,
            time.END_TIME,
        )).to.have.feeLessThan(LIST_NFT_FOR_AUCTION_MAX_FEE)
    });

    it('Should start auction within max fee', async function() {
        await mintAndListAuction(contract, psp34, psp22, TOKEN_ID, PRICE, MIN_BID_STEP);

        await expect(contract.query.startAuction(
            0
        )).to.have.feeLessThan(START_AUCTION_MAX_FEE)
    });

    it('Should cancel auction within max fee', async function() {
        await mintAndListAuction(contract, psp34, psp22, TOKEN_ID, PRICE, MIN_BID_STEP);

        await expect(contract.query.cancelAuction(
            0
        )).to.have.feeLessThan(CANCEL_AUCTION_MAX_FEE)
    });

    it('Should bid on NFT within max fee', async function() {
        await mintAndListAuction(contract, psp34, psp22, TOKEN_ID, PRICE, MIN_BID_STEP);

        await contract.tx.startAuction(0);

        await psp22.withSigner(Signers.Alice).tx.approve(contract.address, 2 * PRICE_WITH_FEE);

        await expect(contract.withSigner(Signers.Alice).query.bidNft(
            0,
            2 * PRICE,
        )).to.have.feeLessThan(BID_NFT_MAX_FEE)
    });

    it('Should claim NFT within max fee', async function() {
        await mintAndListAuction(contract, psp34, psp22, TOKEN_ID, PRICE, MIN_BID_STEP, false, 100, 20);

        await contract.tx.startAuction(0);

        await psp22.withSigner(Signers.Alice).tx.approve(contract.address, 2 * PRICE_WITH_FEE);

        await contract.withSigner(Signers.Alice).tx.bidNft(
            0,
            2 * PRICE,
        )

        for (let i = 0; i < 10; i++) {
            await sleep(150);

            await psp22.withSigner(Signers.Bob).tx.approve(contract.address, 3 * PRICE_WITH_FEE);

            await sleep(150);
        }

        await expect(contract.withSigner(Signers.Alice).query.claimNft(
            0,
        )).to.have.feeLessThan(CLAIM_NFT_MAX_FEE)
    });
});
