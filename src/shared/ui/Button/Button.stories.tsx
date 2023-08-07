import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Button, ButtonVariant } from "./Button";

const meta = {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    args: {
        children: "button",
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: ButtonVariant.default,
    },
};

export const DefaultDark: Story = {
    args: {
        variant: ButtonVariant.default,
    },
};
DefaultDark.decorators = [ThemeDecorator(Theme.dark)];

export const Outline: Story = {
    args: {
        variant: ButtonVariant.outline,
    },
};

export const OutlineDark: Story = {
    args: {
        variant: ButtonVariant.outline,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.dark)];

export const Secondary: Story = {
    args: {
        variant: ButtonVariant.secondary,
    },
};

export const SecondaryDark: Story = {
    args: {
        variant: ButtonVariant.secondary,
    },
};
SecondaryDark.decorators = [ThemeDecorator(Theme.dark)];

export const Square: Story = {
    args: {
        square: true,
        children: "+",
    },
};

export const SquareDark: Story = {
    args: {
        square: true,
        children: "+",
    },
};
SquareDark.decorators = [ThemeDecorator(Theme.dark)];
