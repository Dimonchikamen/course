import { ChangeEvent, FC, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Input } from "./Input";

const InputExample: FC<Omit<Parameters<typeof Input>[0], "value" | "onChange">> = props => {
    const [value, setValue] = useState("");

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    return (
        <div>
            <Input
                {...props}
                value={value}
                onChange={changeHandler}
            />
        </div>
    );
};

const meta = {
    title: "UI/Input",
    component: props => (
        <div>
            <Input {...props} />
        </div>
    ),
    tags: ["autodocs"],
    args: {
        label: "field label",
        placeholder: "placeholder....",
        hint: "field sub info",
        invalid: false,
    },
    parameters: {
        docs: {
            source: {
                code: InputExample,
                language: "tsx",
                type: "code",
            },
        },
    },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputLight: Story = {
    decorators: [ThemeDecorator(Theme.light)],
};
