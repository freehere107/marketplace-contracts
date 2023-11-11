"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeEvents = exports.getEventTypeDescription = exports.getTypeDescription = void 0;
const typechain_types_1 = require("@727-ventures/typechain-types");
function getTypeDescription(id, types) {
    return types[id];
}
exports.getTypeDescription = getTypeDescription;
function getEventTypeDescription(name, types) {
    return types[name];
}
exports.getEventTypeDescription = getEventTypeDescription;
function decodeEvents(events, contract, types) {
    return events.filter((record) => {
        const { event } = record;
        const [address, data] = record.event.data;
        return event.method == 'ContractEmitted' && address.toString() === contract.address.toString();
    }).map((record) => {
        const [address, data] = record.event.data;
        const { args, event } = contract.abi.decodeEvent(data);
        const _event = {};
        for (let i = 0; i < args.length; i++) {
            _event[event.args[i].name] = args[i].toJSON();
        }
        (0, typechain_types_1.handleEventReturn)(_event, getEventTypeDescription(event.identifier.toString(), types));
        return {
            name: event.identifier.toString(),
            args: _event,
        };
    });
}
exports.decodeEvents = decodeEvents;
//# sourceMappingURL=utils.js.map