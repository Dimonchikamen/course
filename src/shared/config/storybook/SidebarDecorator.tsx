import { StoryFn } from "@storybook/react";
import { SidebarProvider } from "app/providers/SidebarProvider";
import { Theme } from "app/providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import { Header } from "widgets/Header";

import s from "app/App.module.scss";

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
                    <div className={s.page_wrap}>
                        <StoryComponent />
                        <div className={s.wrap_content}>
                            <Header />
                        </div>
                    </div>
                </div>
            </SidebarProvider>
        </BrowserRouter>
    );
};
