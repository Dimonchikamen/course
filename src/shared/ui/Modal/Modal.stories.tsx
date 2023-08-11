import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { FC, useState } from "react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Button } from "shared/ui";
import { Modal } from "./Modal";

const ModalExample: FC<Omit<Parameters<typeof Modal>[0], "isOpen" | "onClose">> = props => {
    const [isOpen, setOpen] = useState(false);

    const toggleModal = () => setOpen(prev => !prev);

    return (
        <div>
            <Button onClick={toggleModal}>Show modal</Button>
            <Modal
                {...props}
                isOpen={isOpen}
                onClose={toggleModal}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                <div>
                    <Button onClick={toggleModal}>Close</Button>
                </div>
            </Modal>
        </div>
    );
};

const meta = {
    title: "UI/Modal",
    component: ModalExample,
    tags: ["autodocs"],
    args: {
        external: false,
        size: "l",
        animationDurationMs: 300,
    },
    argTypes: {
        size: {
            options: ["m", "l", "xl"],
            description: "modal window size",
            control: "radio",
            defaultValue: "l",
        },
        animationDurationMs: {
            control: "number",
            description: "duration of open and close animation",
            defaultValue: 300,
        },
    },
    parameters: {
        docs: {
            description: {
                component: "Modal for your site content",
            },
            source: {
                code: ModalExample,
                language: "tsx",
                type: "code",
            },
        },
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
