import type * as EventTypes from '../event-types/creator';
import type { ContractPromise } from "@polkadot/api-contract";
import type { ApiPromise } from "@polkadot/api";
export default class EventsClass {
    readonly __nativeContract: ContractPromise;
    readonly __api: ApiPromise;
    constructor(nativeContract: ContractPromise, api: ApiPromise);
    subscribeOnCollectionCreatedEvent(callback: (event: EventTypes.CollectionCreated) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnUserDataSetEvent(callback: (event: EventTypes.UserDataSet) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    private __subscribeOnEvent;
}
