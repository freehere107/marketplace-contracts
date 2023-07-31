import { describe } from 'mocha'
import {PERFORMANCE_PREFIX} from "../shared/consts";
import Contract from "../../typechain-generated/contracts/user";
import {setupUser} from "../shared/test-setups/user";
import {expect} from "../shared/chai";
import BN from "bn.js";

const SET_USER_DATA_MAX_FEE = new BN(3_800_000_000);

describe(PERFORMANCE_PREFIX + 'Creator', function() {
    let contract : Contract;

    beforeEach(async function() {
        contract = await setupUser();
    })

    it('Should set user data under max fee', async function() {
        await expect(contract.tx.setUserData({
            nick: "@nick",
            avatar: {
                id: {
                    u8: 0
                },
                uri: "https://example.com/avatar.png",
                contractAddress: "0x000000"
            },
            additionInfo: "Some info"
        })).to.have.feeLessThan(SET_USER_DATA_MAX_FEE)
    });
});
