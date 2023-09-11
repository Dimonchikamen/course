import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { getLoginForm } from "./getLoginForm";

describe("getLoginForm selector", () => {
    test("should return form state", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true, username: "usr", password: "123", error: "error" },
        };
        expect(getLoginForm(state as StateSchema)).toEqual({
            isLoading: true,
            username: "usr",
            password: "123",
            error: "error",
        });
    });
});
