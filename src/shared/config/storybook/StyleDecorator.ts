import { StoryFn } from "@storybook/react";
import "index.scss";

export const StyleDecorator = (story: () => ReturnType<StoryFn>) => story();
