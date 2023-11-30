import type * as EventTypes from '../event-types/arch_nft';
import type { ContractPromise } from "@polkadot/api-contract";
import type { ApiPromise } from "@polkadot/api";
export default class EventsClass {
    readonly __nativeContract: ContractPromise;
    readonly __api: ApiPromise;
    constructor(nativeContract: ContractPromise, api: ApiPromise);
    subscribeOnTransferEvent(callback: (event: EventTypes.Transfer) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnApprovalEvent(callback: (event: EventTypes.Approval) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnSetCollectionNameEvent(callback: (event: EventTypes.SetCollectionName) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnSetCollectionUriEvent(callback: (event: EventTypes.SetCollectionUri) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnSetCollectionAdditionalInfoEvent(callback: (event: EventTypes.SetCollectionAdditionalInfo) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnNFTMetadataSetEvent(callback: (event: EventTypes.NFTMetadataSet) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    private __subscribeOnEvent;
}
