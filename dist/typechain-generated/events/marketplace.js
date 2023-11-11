"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const marketplace_json_1 = __importDefault(require("../event-data/marketplace.json"));
const utils_1 = require("../shared/utils");
const typechain_types_1 = require("@727-ventures/typechain-types");
class EventsClass {
    constructor(nativeContract, api) {
        this.__nativeContract = nativeContract;
        this.__api = api;
    }
    subscribeOnListNFTEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('ListNFT', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'ListNFT');
    }
    subscribeOnCancelListingEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('CancelListing', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'CancelListing');
    }
    subscribeOnBuyNFTEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('BuyNFT', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'BuyNFT');
    }
    subscribeOnBuyBatchEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('BuyBatch', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'BuyBatch');
    }
    subscribeOnAuctionCreatedEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('AuctionCreated', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'AuctionCreated');
    }
    subscribeOnCancelAuctionEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('CancelAuction', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'CancelAuction');
    }
    subscribeOnBidPlacedEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('BidPlaced', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'BidPlaced');
    }
    subscribeOnNFTClaimedEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('NFTClaimed', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'NFTClaimed');
    }
    subscribeOnNoBidsEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('NoBids', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'NoBids');
    }
    subscribeOnStartAuctionEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('StartAuction', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'StartAuction');
    }
    subscribeOnEndAuctionEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('EndAuction', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'EndAuction');
    }
    subscribeOnAdminAddedEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('AdminAdded', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'AdminAdded');
    }
    subscribeOnAdminRemovedEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('AdminRemoved', marketplace_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'AdminRemoved');
    }
    __subscribeOnEvent(callback, filter = () => true) {
        // @ts-ignore
        return this.__api.query.system.events((events) => {
            events.forEach((record) => {
                const { event } = record;
                if (event.method == 'ContractEmitted') {
                    const [address, data] = record.event.data;
                    if (address.toString() === this.__nativeContract.address.toString()) {
                        const { args, event } = this.__nativeContract.abi.decodeEvent(data);
                        if (filter(event.identifier.toString()))
                            callback(args, event);
                    }
                }
            });
        });
    }
}
exports.default = EventsClass;
//# sourceMappingURL=marketplace.js.map