import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginError } from "./getLoginError";

describe("getLoginError selector", () => {
    test("should return error string", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { error: "error" },
        };
        expect(getLoginError(state as StateSchema)).toBe("error");
    });

    test("should return empty string with undefined store", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginError(state as StateSchema)).toBe("");
    });
});
