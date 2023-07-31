import { describe } from 'mocha'
import {PERFORMANCE_PREFIX} from "../shared/consts";
import Contract from "../../typechain-generated/contracts/account_manager";
import {setupAccountManager} from "../shared/test-setups/account_manager";
import BN from "bn.js";
import {expect} from "../shared/chai";
import CreatorABI from "../../artifacts/creator.json";
import UserABI from "../../artifacts/user.json";

const CREATE_ACCOUNT_MAX_FEE = new BN(13_500_000_000);
const CREATE_CREATOR_ACCOUNT_MAX_FEE = new BN(13_100_000_000);
const SET_CREATOR_CODE_HASH_MAX_FEE = new BN(10_000_000_000);
const SET_USER_CODE_HASH_MAX_FEE = new BN(10_000_000_000);

describe(PERFORMANCE_PREFIX + 'AccountManager', function() {
    let contract: Contract;

    beforeEach(async function() {
        contract = await setupAccountManager();
    });

    it('Should create an account within max fee', async function() {
        await expect(contract.tx.createAccount()).to.have.feeLessThan(CREATE_ACCOUNT_MAX_FEE)
    });

    it('Should create a creator account within max fee', async function() {
        await expect(contract.tx.createCreatorAccount()).to.have.feeLessThan(CREATE_CREATOR_ACCOUNT_MAX_FEE)
    });

    it('Should set the creator code hash within max fee', async function() {
        await expect(contract.tx.setCreatorCodeHash(CreatorABI.source.hash)).to.have.feeLessThan(SET_CREATOR_CODE_HASH_MAX_FEE)
    });

    it('Should set the user code hash within max fee', async function() {
        await expect(contract.tx.setUserCodeHash(UserABI.source.hash)).to.have.feeLessThan(SET_USER_CODE_HASH_MAX_FEE)
    });
});
