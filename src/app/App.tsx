import {FC} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar";

import s from "./App.module.scss";


const App: FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames("app", theme)}>
            <ThemeSwitcher />
            <Navbar />
            <div className={s.content}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}

export default App;