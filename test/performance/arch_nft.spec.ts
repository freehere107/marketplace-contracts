import { describe } from 'mocha'
import {PERFORMANCE_PREFIX} from "../shared/consts";
import Contract from "../../typechain-generated/contracts/arch_nft";
import {expect} from "../shared/chai";
import BN from "bn.js";
import {Signers} from "../shared/signers";
import {setupArchNFT} from "../shared/test-setups/arch_nft";

const SET_COLLECTION_NAME_MAX_FEE = new BN(3_000_000_000);
const SET_COLLECTION_URI_MAX_FEE = new BN(2_900_000_000);
const SET_COLLECTION_ADDITIONAL_INFO_MAX_FEE = new BN(2_900_000_000);
const SET_ATTRIBUTE_MAX_FEE = new BN(2_900_000_000);

describe(PERFORMANCE_PREFIX + 'ArchNFT', function() {
    let contract : Contract;

    beforeEach(async function() {
        contract = await setupArchNFT()
    })

    it('Should set collection name within max fee', async function() {
        await expect(contract.tx.setCollectionName("test")).to.have.feeLessThan(SET_COLLECTION_NAME_MAX_FEE)
    });

    it('Should set collection URI within max fee', async function() {
        await expect(contract.tx.setCollectionUri("test")).to.have.feeLessThan(SET_COLLECTION_URI_MAX_FEE)
    });

    it('Should set collection additional info within max fee', async function() {
        await expect(contract.tx.setCollectionAdditionalInfo("test")).to.have.feeLessThan(SET_COLLECTION_ADDITIONAL_INFO_MAX_FEE)
    });

    it('Should set attribute within max fee', async function() {
        const token_id = { u8: 0 }
        await contract.tx.mint(Signers.Charlie.address, token_id)
        await expect(contract.tx.setAttribute(token_id, "key", "value")).to.have.feeLessThan(SET_ATTRIBUTE_MAX_FEE)
    });
});
