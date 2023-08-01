import { Meta, StoryObj } from "@storybook/react";
import { DynamicThemeDecorator } from "shared/config/storybook/DynamicThemeDecorator";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

const meta = {
    title: "Widget/ThemeSwitcher",
    component: ThemeSwitcher,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.decorators = [DynamicThemeDecorator];
