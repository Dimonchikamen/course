import {FC, Suspense } from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Header} from "widgets/Header";
import {Sidebar} from "widgets/Sidebar";

import s from "./App.module.scss";

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames("app", theme)}>
            <Suspense fallback="">
                <div className={s.page_wrap}>
                    <Sidebar />
                    <div className={s.wrap_content}>
                        <Header />
                        <div className={s.page_content}>
                            <AppRouter />
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;