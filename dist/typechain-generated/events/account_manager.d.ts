import type * as EventTypes from '../event-types/account_manager';
import type { ContractPromise } from "@polkadot/api-contract";
import type { ApiPromise } from "@polkadot/api";
export default class EventsClass {
    readonly __nativeContract: ContractPromise;
    readonly __api: ApiPromise;
    constructor(nativeContract: ContractPromise, api: ApiPromise);
    subscribeOnAccountCreatedEvent(callback: (event: EventTypes.AccountCreated) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnCreatorAccountCreatedEvent(callback: (event: EventTypes.CreatorAccountCreated) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnCodeHashSetEvent(callback: (event: EventTypes.CodeHashSet) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnAdminAddedEvent(callback: (event: EventTypes.AdminAdded) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnAdminRemovedEvent(callback: (event: EventTypes.AdminRemoved) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    private __subscribeOnEvent;
}
