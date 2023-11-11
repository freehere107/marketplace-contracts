import type * as EventTypes from '../event-types/mock_auction';
import type { ContractPromise } from "@polkadot/api-contract";
import type { ApiPromise } from "@polkadot/api";
export default class EventsClass {
    readonly __nativeContract: ContractPromise;
    readonly __api: ApiPromise;
    constructor(nativeContract: ContractPromise, api: ApiPromise);
    subscribeOnListNFTEvent(callback: (event: EventTypes.ListNFT) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnCancelListingEvent(callback: (event: EventTypes.CancelListing) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnBuyNFTEvent(callback: (event: EventTypes.BuyNFT) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnBuyBatchEvent(callback: (event: EventTypes.BuyBatch) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnAuctionCreatedEvent(callback: (event: EventTypes.AuctionCreated) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnCancelAuctionEvent(callback: (event: EventTypes.CancelAuction) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnBidPlacedEvent(callback: (event: EventTypes.BidPlaced) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnNFTClaimedEvent(callback: (event: EventTypes.NFTClaimed) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnNoBidsEvent(callback: (event: EventTypes.NoBids) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnStartAuctionEvent(callback: (event: EventTypes.StartAuction) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnEndAuctionEvent(callback: (event: EventTypes.EndAuction) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnAdminAddedEvent(callback: (event: EventTypes.AdminAdded) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    subscribeOnAdminRemovedEvent(callback: (event: EventTypes.AdminRemoved) => void): Promise<import("@polkadot/types-codec/types").Codec>;
    private __subscribeOnEvent;
}
