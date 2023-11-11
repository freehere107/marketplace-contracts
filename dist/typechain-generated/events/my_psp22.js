"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventsClass {
    constructor(nativeContract, api) {
        this.__nativeContract = nativeContract;
        this.__api = api;
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
//# sourceMappingURL=my_psp22.js.map