import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Modal } from "./Modal";

const meta = {
    title: "UI/Modal",
    component: Modal,
    tags: [""],
    args: {
        isOpen: true,
        children: "Modal",
        toggle: () => {},
    },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalLight: Story = {
    decorators: [ThemeDecorator(Theme.light)],
};

export const ModalDark: Story = {
    decorators: [ThemeDecorator(Theme.dark)],
};
