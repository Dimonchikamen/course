import {FC, Suspense} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar";

import s from "./App.module.scss";

const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames("app", theme)}>
            <Suspense fallback="">
                <Navbar />
                <div className={s.content}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App;