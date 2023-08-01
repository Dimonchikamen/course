import { StoryFn } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => ReturnType<StoryFn>) => {
    return (
        <div
            className={`app ${theme}`}
            style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 400, height: "100%" }}
        >
            <StoryComponent />
        </div>
    );
};
