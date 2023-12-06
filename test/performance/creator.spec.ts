// SPDX-License-Identifier: MIT
import Contract from "../../typechain-generated/contracts/creator";
import ApiSingleton from "../shared/api_singleton";
import {PERFORMANCE_PREFIX} from "../shared/consts";
import {setupCreator} from "../shared/test-setups/creator";

describe(PERFORMANCE_PREFIX + 'Creator', function() {
    // eslint-disable-next-line no-unused-vars
    let contract : Contract;

    beforeEach(async function() {
        contract = await setupCreator();
    })

    after(async function() {
        await ApiSingleton.disconnect();
    })
});
