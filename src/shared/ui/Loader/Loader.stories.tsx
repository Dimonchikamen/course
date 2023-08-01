import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Loader } from "shared/ui";

const meta = {
    title: "UI/Loader",
    component: Loader,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.dark)];
