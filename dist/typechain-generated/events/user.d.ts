import type * as EventTypes from '../event-types/user';
import type { ContractPromise } from "@polkadot/api-contract";
import type { ApiPromise } from "@polkadot/api";
export default class EventsClass {
    readonly __nativeContract: ContractPromise;
    readonly __api: ApiPromise;
    constructor(nativeContract: ContractPromise, api: ApiPromise);
    subscribeOnUserDataSetEvent(callback: (event: EventTypes.UserDataSet) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    private __subscribeOnEvent;
}
