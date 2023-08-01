import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Button, ButtonVariant } from "./Button";

const meta = {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "default",
        variant: ButtonVariant.default,
    },
};

export const DefaultDark: Story = {
    args: {
        children: "default",
        variant: ButtonVariant.default,
    },
};
DefaultDark.decorators = [ThemeDecorator(Theme.dark)];

export const Outline: Story = {
    args: {
        children: "invert",
        variant: ButtonVariant.outline,
    },
};

export const OutlineDark: Story = {
    args: {
        children: "outline dark",
        variant: ButtonVariant.outline,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.dark)];

export const Secondary: Story = {
    args: {
        children: "secondary",
        variant: ButtonVariant.secondary,
    },
};

export const SecondaryDark: Story = {
    args: {
        children: "secondary dark",
        variant: ButtonVariant.secondary,
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.dark)];
