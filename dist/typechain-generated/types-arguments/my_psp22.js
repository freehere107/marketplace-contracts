"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PSP22ErrorBuilder = exports.LangError = void 0;
var LangError;
(function (LangError) {
    LangError["couldNotReadInput"] = "CouldNotReadInput";
})(LangError = exports.LangError || (exports.LangError = {}));
class PSP22ErrorBuilder {
    static Custom(value) {
        return {
            custom: value,
        };
    }
    static InsufficientBalance() {
        return {
            insufficientBalance: null,
        };
    }
    static InsufficientAllowance() {
        return {
            insufficientAllowance: null,
        };
    }
    static ZeroRecipientAddress() {
        return {
            zeroRecipientAddress: null,
        };
    }
    static ZeroSenderAddress() {
        return {
            zeroSenderAddress: null,
        };
    }
    static SafeTransferCheckFailed(value) {
        return {
            safeTransferCheckFailed: value,
        };
    }
}
exports.PSP22ErrorBuilder = PSP22ErrorBuilder;
//# sourceMappingURL=my_psp22.js.map