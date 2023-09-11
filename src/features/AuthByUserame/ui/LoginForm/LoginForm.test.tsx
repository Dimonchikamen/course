import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { StoreProvider } from "app/providers/StoreProvider";
import { I18nextProvider } from "react-i18next";
import i18nForTests from "shared/config/i18n/i18nForTests";
import LoginForm from "./LoginForm";

describe("Login by username tests", () => {
    test("Render login form", () => {
        render(
            <I18nextProvider i18n={i18nForTests}>
                <StoreProvider initialState={{ loginForm: { username: "123", password: "123" } }}>
                    <LoginForm />
                </StoreProvider>
            </I18nextProvider>
        );
        const loginForm = screen.getByTestId("login-form");
        const loginInput = screen.getByTestId("login-input");
        const passwordInput = screen.getByTestId("password-input");
        expect(loginForm).toBeInTheDocument();
        expect(loginInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    test("Form and store values are equal", () => {
        render(
            <I18nextProvider i18n={i18nForTests}>
                <StoreProvider initialState={{ loginForm: { username: "123", password: "123" } }}>
                    <LoginForm />
                </StoreProvider>
            </I18nextProvider>
        );
        const loginInput = screen.getByTestId("login-input");
        const passwordInput = screen.getByTestId("password-input");
        expect(loginInput).toHaveValue("123");
        expect(passwordInput).toHaveValue("123");
    });

    test("Dynamic change form", async () => {
        render(
            <I18nextProvider i18n={i18nForTests}>
                <StoreProvider initialState={{ loginForm: { username: "", password: "" } }}>
                    <LoginForm />
                </StoreProvider>
            </I18nextProvider>
        );
        const loginInputStart = screen.getByTestId("login-input");
        const passwordInputStart = screen.getByTestId("password-input");
        await userEvent.type(loginInputStart, "qwe");
        await userEvent.type(passwordInputStart, "qwe");
        const loginInputEnd = screen.getByTestId("login-input");
        const passwordInputEnd = screen.getByTestId("password-input");
        expect(loginInputEnd).toHaveValue("qwe");
        expect(passwordInputEnd).toHaveValue("qwe");
    });
});
