import { ApiPromise } from '@polkadot/api';
export default class ApiSingleton {
    private static instance;
    static getInstance(): Promise<ApiPromise>;
    static getInstanceSync(): ApiPromise;
    static disconnect(): Promise<void>;
    static initWithApi(api: ApiPromise): Promise<void>;
}
