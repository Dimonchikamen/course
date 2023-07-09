import App from "./app/App";
import {BrowserRouter} from "react-router-dom";

import "./index.scss";
import ThemeProvider from "./app/providers/ThemeProvider/ui/ThemeProvider";
import {createRoot} from "react-dom/client";


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
);

