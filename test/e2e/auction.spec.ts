import {after, describe} from "mocha";
import ApiSingleton from "../shared/api_singleton";

describe("Auction", () => {
    after(async () => {
        await ApiSingleton.disconnect();
    });
});