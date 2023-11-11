/// <reference types="chai" />
import BN from "bn.js";
declare global {
    export namespace Chai {
        interface Assertion {
            returnValue: (val: any) => Promise<Assertion>;
            deepReturnValue: (val: any) => Promise<Assertion>;
            returnNumber: (val: number) => Promise<Assertion>;
            feeLessThan: (val: BN) => Promise<Assertion>;
        }
    }
}
export declare const assert: Chai.AssertStatic;
export declare const expect: Chai.ExpectStatic;
