export declare enum LangError {
    couldNotReadInput = "CouldNotReadInput"
}
export type AccountId = string | number[];
export interface PSP22Error {
    custom?: string;
    insufficientBalance?: null;
    insufficientAllowance?: null;
    zeroRecipientAddress?: null;
    zeroSenderAddress?: null;
    safeTransferCheckFailed?: string;
}
export declare class PSP22ErrorBuilder {
    static Custom(value: string): PSP22Error;
    static InsufficientBalance(): PSP22Error;
    static InsufficientAllowance(): PSP22Error;
    static ZeroRecipientAddress(): PSP22Error;
    static ZeroSenderAddress(): PSP22Error;
    static SafeTransferCheckFailed(value: string): PSP22Error;
}
