import { StateSchema } from "app/providers/StoreProvider";
import { getLoginForm } from "./getLoginForm";
import { DeepPartial } from "shared/model/types";

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
