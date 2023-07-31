import {PERFORMANCE_PREFIX} from "../shared/consts";
import Contract from "../../typechain-generated/contracts/creator";
import {setupCreator} from "../shared/test-setups/creator";
import ArchNFTAbi from "../../artifacts/arch_nft.json";
import {Hash} from "../../typechain-generated/types-returns/creator";
import {expect} from "../shared/chai";
import BN from "bn.js";

const CREATE_COLLECTION_MAX_FEE = new BN(10_000_000_000);

describe(PERFORMANCE_PREFIX + 'Creator', function() {
    let contract : Contract;

    beforeEach(async function() {
        contract = await setupCreator();
    })

    it('Should create collection within max fee', async function() {
        await expect(contract.tx.createCollection(
            "test",
            "test",
            100,
            "123",
            ArchNFTAbi.source.hash as unknown as Hash
        )).to.have.feeLessThan(CREATE_COLLECTION_MAX_FEE)
    });
});
