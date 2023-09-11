import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { TranslationDecorator } from "shared/config/storybook/TranslationDecorator";
import LoginForm from "./LoginForm";

const meta = {
    title: "Features/LoginForm",
    component: LoginForm,
    tags: ["autodocs"],
    parameters: {
        docs: {
            source: {
                code: LoginForm,
                language: "tsx",
                type: "code",
            },
        },
    },
    decorators: [TranslationDecorator, StoreDecorator({ loginForm: { username: "123", password: "123" } })],
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoginFormLight: Story = {
    decorators: [ThemeDecorator(Theme.light)],
};

export const LoginFormDark: Story = {
    decorators: [ThemeDecorator(Theme.dark)],
};

export const LoginFormWithError: Story = {
    decorators: [
        StoreDecorator({ loginForm: { username: "user", password: "pass", error: "from custom text error" } }),
    ],
};
