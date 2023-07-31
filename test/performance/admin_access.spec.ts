import {PERFORMANCE_PREFIX} from "../shared/consts";
import CreatorABI from "../../artifacts/creator.json";
import {calculateFee} from "../shared/fees";
import {expect} from "../shared/chai";
import Contract from "../../typechain-generated/contracts/my_admin_access";
import {setupAdminAccess} from "../shared/test-setups/admin_access";
import {Signers} from "../shared/signers";
import BN from "bn.js";

const ADD_ADMIN_MAX_FEE = new BN(3_000_000_000);
const REMOVE_ADMIN_MAX_FEE = new BN(3_000_000_000);

describe(PERFORMANCE_PREFIX + 'AdminAccess contract', function () {
    let contract: Contract;

    beforeEach(async function () {
        contract = await setupAdminAccess();
    })

    it('Add admin', async function () {
        await expect(contract.tx.addAdmin(Signers.Alice.address)).to.have.feeLessThan(ADD_ADMIN_MAX_FEE)
    });

    it('Remove admin', async function () {
        await contract.tx.addAdmin(Signers.Alice.address)
        await expect(contract.tx.removeAdmin(Signers.Alice.address)).to.have.feeLessThan(REMOVE_ADMIN_MAX_FEE)
    });
});
