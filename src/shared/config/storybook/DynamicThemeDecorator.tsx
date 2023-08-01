import { StoryFn } from "@storybook/react";
import { ThemeProvider, useTheme } from "app/providers/ThemeProvider";
import { ReactNode } from "react";

// eslint-disable-next-line react/display-name
export const DynamicThemeDecorator = (StoryComponent: () => ReturnType<StoryFn>) => {
    return (
        <ThemeProvider>
            <Hoc>
                <StoryComponent />
            </Hoc>
        </ThemeProvider>
    );
};

const Hoc = ({ children }: { children: ReactNode }) => {
    const { theme } = useTheme();

    return (
        <div
            className={`app ${theme}`}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 400,
                height: "100%",
            }}
        >
            {children}
        </div>
    );
};
