import { StoryFn } from "@storybook/react";
import { SidebarProvider } from "app/providers/SidebarProvider";
import { Theme } from "app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { Header } from "widgets/Header";

// eslint-disable-next-line react/display-name
export const SidebarDecorator = (theme: Theme) => (StoryComponent: () => ReturnType<StoryFn>) => {
    return (
        <BrowserRouter>
            <SidebarProvider>
                <div
                    className={`app ${theme}`}
                    style={{
                        display: "flex",
                        minHeight: 400,
                        height: "100%",
                    }}
                >
                    <StoryComponent />
                    <div style={{ flexGrow: "1" }}>
                        <Header />
                    </div>
                </div>
            </SidebarProvider>
        </BrowserRouter>
    );
};
