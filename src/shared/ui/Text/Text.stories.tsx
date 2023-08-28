import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Text } from "./Text";

const meta = {
    title: "UI/Text",
    component: Text,
    tags: ["autodocs"],
    args: {
        title: "Title",
        text: "Text content or description",
    },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.dark)];
