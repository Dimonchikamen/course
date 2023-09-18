import { StateSchema } from "app/providers/StoreProvider";
import { getCounter } from "entities/Counter/model/selectors/getCounter/getCounter";
import { DeepPartial } from "shared/model/types";

describe("getCounter selector", () => {
    test("should return counter value", () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
