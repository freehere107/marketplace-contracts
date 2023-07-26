import chai, { Assertion } from "chai";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

declare global {
    export namespace Chai {
        interface Assertion {
            returnValue: (val: any) => Promise<Assertion>;
            deepReturnValue: (val: any) => Promise<Assertion>;
            returnNumber: (val: number) => Promise<Assertion>;
        }
    }
}

Assertion.addMethod('returnValue', function (this: any, expected: any) {
    const obj = this._obj;

    return new Promise((resolve, reject) => {
        obj
            .then((result: any) => {
                const unwrappedValue = result.value.unwrapRecursively();

                this.assert(
                    unwrappedValue === expected,
                    'expected #{this} to have a return value #{exp} but got #{act}',
                    'expected #{this} to not have a return value #{act}',
                    expected,
                    unwrappedValue
                );

                resolve(unwrappedValue);
            })
            .catch((error: any) => {
                reject(error);
            });
    });
});

Assertion.addMethod('deepReturnValue', function (this: any, expected: any) {
    const obj = this._obj;

    return new Promise((resolve, reject) => {
        obj
            .then((result: any) => {
                const unwrappedValue = result.value.unwrapRecursively();

                this.assert(
                    JSON.stringify(unwrappedValue) === JSON.stringify(expected),
                    'expected #{this} to have a return value #{exp} but got #{act}',
                    'expected #{this} to not have a return value #{act}',
                    expected,
                    unwrappedValue
                );

                resolve(unwrappedValue);
            })
            .catch((error: any) => {
                reject(error);
            });
    });
});

Assertion.addMethod('returnNumber', function (this: any, expected: any) {
    const obj = this._obj;

    return new Promise((resolve, reject) => {
        obj
            .then((result: any) => {
                const unwrappedValue = result.value.unwrapRecursively().toNumber();

                this.assert(
                    unwrappedValue === expected,
                    'expected #{this} to have a return value #{exp} but got #{act}',
                    'expected #{this} to not have a return value #{act}',
                    expected,
                    unwrappedValue
                );

                resolve(unwrappedValue);
            })
            .catch((error: any) => {
                reject(error);
            });
    });
});

export const assert = chai.assert;
export const expect = chai.expect;
