import { StateSchema } from "app/providers/StoreProvider";
import { getLoginPassword } from "./getLoginPassword";
import { DeepPartial } from "shared/model/types";

describe("getLoginForm selector", () => {
    test("should return form state", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: "123" },
        };
        expect(getLoginPassword(state as StateSchema)).toBe("123");
    });

    test("should return empty string with undefined store", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe("");
    });
});
