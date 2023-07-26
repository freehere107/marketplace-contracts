import {ApiPromise} from "@polkadot/api";

export default class ApiSingleton {
    private static instance: ApiPromise | undefined;

    public static async getInstance(): Promise<ApiPromise> {
        if (!ApiSingleton.instance) {
            ApiSingleton.instance = await ApiPromise.create();
        }

        return ApiSingleton.instance;
    }

    public static async disconnect(): Promise<void> {
        if (ApiSingleton.instance) {
            await ApiSingleton.instance.disconnect();
        }

        ApiSingleton.instance = undefined;
    }
}