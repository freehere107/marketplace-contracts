"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const creator_json_1 = __importDefault(require("../event-data/creator.json"));
const utils_1 = require("../shared/utils");
const typechain_types_1 = require("@727-ventures/typechain-types");
class EventsClass {
    constructor(nativeContract, api) {
        this.__nativeContract = nativeContract;
        this.__api = api;
    }
    subscribeOnCollectionCreatedEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('CollectionCreated', creator_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'CollectionCreated');
    }
    subscribeOnUserDataSetEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('UserDataSet', creator_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'UserDataSet');
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
//# sourceMappingURL=creator.js.map