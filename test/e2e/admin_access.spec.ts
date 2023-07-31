import { describe } from 'mocha'
import {setupAdminAccess} from "../shared/test-setups/admin_access";
import ApiSingleton from "../shared/api_singleton";
import {expect} from "../shared/chai";
import Contract from "../../typechain-generated/contracts/my_admin_access";
import {Signers} from "../shared/signers";
import {KeyringPair} from "@polkadot/keyring/types";

describe('AdminAccess', function () {
    let adminAccess: Contract

    let alice: KeyringPair, bob: KeyringPair

    beforeEach(async function () {
        adminAccess = await setupAdminAccess()
        alice = Signers.Alice
        bob = Signers.Bob
    })

    after(async function () {
        await ApiSingleton.disconnect()
    })

    it('Can set admin', async function () {
        await expect(adminAccess.tx.addAdmin(bob.address)).to.eventually.be.fulfilled
    })

    it('Can remove admin', async function () {
        await expect(adminAccess.tx.addAdmin(bob.address)).to.eventually.be.fulfilled

        await expect(adminAccess.tx.removeAdmin(bob.address)).to.eventually.be.fulfilled
    })

    it('Cannot remove admin if not admin', async function () {
        await expect(adminAccess.tx.removeAdmin(bob.address)).to.eventually.be.rejected
    })

    it('Cannot add admin if not admin', async function () {
        await expect(adminAccess.withSigner(alice).tx.addAdmin(bob.address)).to.eventually.be.rejected
    })

    it('Cannot remove admin if not admin', async function () {
        await expect(adminAccess.withSigner(alice).tx.removeAdmin(bob.address)).to.eventually.be.rejected
    })

    it('Check if admin', async function () {
        await expect(adminAccess.tx.addAdmin(bob.address)).to.eventually.be.fulfilled

        await expect(adminAccess.query.isAdmin(bob.address)).to.have.returnValue(true)
    })
})