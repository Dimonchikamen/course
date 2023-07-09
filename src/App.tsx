import {FC, Suspense,} from "react";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";
import {Link, Route, Routes } from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {Counter} from "./components/Counter";


const App: FC = () => {
    const { theme, toggleTheme } = useTheme()


    return (
        <div className={classNames("app", theme)}>
            <button onClick={toggleTheme}>Изменить тему</button>
            <Link to={"/about"}>Главная</Link>
            <Link to={"/main"}>About</Link>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={"/about"} element={<AboutPageLazy />}/>
                    <Route path={"/main"} element={<MainPageLazy />}/>
                </Routes>
            </Suspense>
            <Counter/>
        </div>
    )
}

export default App;