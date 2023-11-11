import type * as EventTypes from '../event-types/my_admin_access';
import type { ContractPromise } from "@polkadot/api-contract";
import type { ApiPromise } from "@polkadot/api";
export default class EventsClass {
    readonly __nativeContract: ContractPromise;
    readonly __api: ApiPromise;
    constructor(nativeContract: ContractPromise, api: ApiPromise);
    subscribeOnAdminAddedEvent(callback: (event: EventTypes.AdminAdded) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnAdminRemovedEvent(callback: (event: EventTypes.AdminRemoved) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    private __subscribeOnEvent;
}
