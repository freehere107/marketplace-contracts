import type { ContractPromise } from "@polkadot/api-contract";
export declare function getTypeDescription(id: number | string, types: any): any;
export declare function getEventTypeDescription(name: string, types: any): any;
export declare function decodeEvents(events: any[], contract: ContractPromise, types: any): any[];
