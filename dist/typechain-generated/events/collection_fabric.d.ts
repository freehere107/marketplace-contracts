import type * as EventTypes from '../event-types/collection_fabric';
import type { ContractPromise } from "@polkadot/api-contract";
import type { ApiPromise } from "@polkadot/api";
export default class EventsClass {
    readonly __nativeContract: ContractPromise;
    readonly __api: ApiPromise;
    constructor(nativeContract: ContractPromise, api: ApiPromise);
    subscribeOnAdminAddedEvent(callback: (event: EventTypes.AdminAdded) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnAdminRemovedEvent(callback: (event: EventTypes.AdminRemoved) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnCollectionInstantiatedEvent(callback: (event: EventTypes.CollectionInstantiated) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnCollectionBannedEvent(callback: (event: EventTypes.CollectionBanned) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnCollectionUnbannedEvent(callback: (event: EventTypes.CollectionUnbanned) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnCodehashBannedEvent(callback: (event: EventTypes.CodehashBanned) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnCodehashUnbannedEvent(callback: (event: EventTypes.CodehashUnbanned) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnCollectionWhiteListedEvent(callback: (event: EventTypes.CollectionWhiteListed) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnCollectionUnWhiteListedEvent(callback: (event: EventTypes.CollectionUnWhiteListed) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnWhitelistEnabledEvent(callback: (event: EventTypes.WhitelistEnabled) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    private __subscribeOnEvent;
}
