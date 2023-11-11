"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_contract_1 = require("@polkadot/api-contract");
const typechain_types_1 = require("@727-ventures/typechain-types");
const account_manager_1 = require("../contract-info/account_manager");
class Constructors {
    constructor(nativeAPI, signer) {
        this.nativeAPI = nativeAPI;
        this.signer = signer;
    }
    /**
    * new
    *
    * @param { ArgumentTypes.Hash } userCodeHash,
    * @param { ArgumentTypes.Hash } creatorCodeHash,
    */
    async "new"(userCodeHash, creatorCodeHash, __options) {
        const __contract = JSON.parse(account_manager_1.ContractFile);
        const code = new api_contract_1.CodePromise(this.nativeAPI, __contract, __contract.source.wasm);
        const gasLimit = (await (0, typechain_types_1._genValidGasLimitAndValue)(this.nativeAPI, __options)).gasLimit;
        const storageDepositLimit = __options === null || __options === void 0 ? void 0 : __options.storageDepositLimit;
        const tx = code.tx["new"]({ gasLimit, storageDepositLimit, value: __options === null || __options === void 0 ? void 0 : __options.value }, userCodeHash, creatorCodeHash);
        let response;
        try {
            response = await (0, typechain_types_1._signAndSend)(this.nativeAPI.registry, tx, this.signer, (event) => event);
        }
        catch (error) {
            console.log(error);
        }
        return {
            result: response,
            // @ts-ignore
            address: response.result.contract.address.toString(),
        };
    }
}
exports.default = Constructors;
//# sourceMappingURL=account_manager.js.map