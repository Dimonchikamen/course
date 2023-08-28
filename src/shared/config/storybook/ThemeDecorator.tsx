import { StoryFn } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => ReturnType<StoryFn>) => {
    return (
        <ThemeProvider initialTheme={theme}>
            <div
                className={`app ${theme}`}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: 400,
                    height: "100%",
                }}
            >
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
