import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {SidebarProvider} from "app/providers/SidebarProvider";
import App from "./app/App";

import "shared/config/i18n/i18n";

import "./index.scss";


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <SidebarProvider>
                <App/>
            </SidebarProvider>
        </ThemeProvider>
    </BrowserRouter>
);

