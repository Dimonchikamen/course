import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "./getLoginUsername";

describe("getLoginForm selector", () => {
    test("should return form state", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: "usr" },
        };
        expect(getLoginUsername(state as StateSchema)).toBe("usr");
    });

    test("should return empty string with undefined store", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe("");
    });
});
