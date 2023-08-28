import { Meta, StoryObj } from "@storybook/react";
import { DynamicThemeDecorator } from "shared/config/storybook/DynamicThemeDecorator";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
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
BaseHeader.decorators = [StoreDecorator({}), DynamicThemeDecorator];
