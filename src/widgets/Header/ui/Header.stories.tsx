import { Meta, StoryObj } from "@storybook/react";
import { DynamicThemeDecorator } from "shared/config/storybook/DynamicThemeDecorator";
import { Header } from "./Header";

const meta = {
    title: "Widget/Header",
    component: Header,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseHeader: Story = {};
BaseHeader.decorators = [DynamicThemeDecorator];
