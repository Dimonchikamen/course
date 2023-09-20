import { StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator = (Story: () => ReturnType<StoryFn>) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
