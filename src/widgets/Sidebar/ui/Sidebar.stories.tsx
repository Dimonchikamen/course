import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { SidebarDecorator } from "shared/config/storybook/SidebarDecorator";
import { Sidebar } from "./Sidebar";

const meta = {
    title: "Widget/Sidebar",
    component: Sidebar,
    tags: ["autodocs"],
    argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.decorators = [SidebarDecorator(Theme.light)];

export const DefaultDark: Story = {};
DefaultDark.decorators = [SidebarDecorator(Theme.dark)];
