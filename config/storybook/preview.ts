import "loki/configure-react";
import type { Preview } from "@storybook/react";
import { Theme } from "../../src/app/providers/ThemeProvider";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator";
import { TranslationDecorator } from "../../src/shared/config/storybook/TranslationDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator";
import "./preview.scss";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [RouterDecorator, StyleDecorator, TranslationDecorator, ThemeDecorator(Theme.light)],
};

export default preview;
