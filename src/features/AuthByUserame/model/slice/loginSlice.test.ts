import { DeepPartial } from "@reduxjs/toolkit";
import { loginActions, loginReducer } from "features/AuthByUserame/model/slice/loginSlice";
import { LoginSchema } from "../types/loginSchema";

describe("loginSlice.test", () => {
    test("test set username", () => {
        const state: DeepPartial<LoginSchema> = { username: "" };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername("qwe"))).toEqual({ username: "qwe" });
    });

    test("test set password", () => {
        const state: DeepPartial<LoginSchema> = { password: "" };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword("qwe"))).toEqual({ password: "qwe" });
    });
});
