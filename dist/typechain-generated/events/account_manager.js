"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_manager_json_1 = __importDefault(require("../event-data/account_manager.json"));
const utils_1 = require("../shared/utils");
const typechain_types_1 = require("@727-ventures/typechain-types");
class EventsClass {
    constructor(nativeContract, api) {
        this.__nativeContract = nativeContract;
        this.__api = api;
    }
    subscribeOnAccountCreatedEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('AccountCreated', account_manager_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'AccountCreated');
    }
    subscribeOnCreatorAccountCreatedEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('CreatorAccountCreated', account_manager_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'CreatorAccountCreated');
    }
    subscribeOnCodeHashSetEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('CodeHashSet', account_manager_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'CodeHashSet');
    }
    subscribeOnAdminAddedEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('AdminAdded', account_manager_json_1.default)));
        };
        return this.__subscribeOnEvent(callbackWrapper, (eventName) => eventName == 'AdminAdded');
    }
    subscribeOnAdminRemovedEvent(callback) {
        const callbackWrapper = (args, event) => {
            const _event = {};
            for (let i = 0; i < args.length; i++) {
                _event[event.args[i].name] = args[i].toJSON();
            }
            callback((0, typechain_types_1.handleEventReturn)(_event, (0, utils_1.getEventTypeDescription)('AdminRemoved', account_manager_json_1.default)));
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
//# sourceMappingURL=account_manager.js.map