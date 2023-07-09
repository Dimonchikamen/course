import {FC, Suspense,} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Link, Route, Routes } from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";


const App: FC = () => {
    const { theme, toggleTheme } = useTheme()


    return (
        <div className={classNames("app", theme)}>
            <button onClick={toggleTheme}>Изменить тему</button>
            <Link to={"/about"}>Главная</Link>
            <Link to={"/main"}>About</Link>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPage />}/>
                    <Route path={"/main"} element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;