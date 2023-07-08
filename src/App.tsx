import {FC, Suspense, useContext,} from "react";
import {Counter} from "./components/Counter";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {useTheme} from "./theme/useTheme";


const App: FC = () => {
    const { theme, toggleTheme } = useTheme()


    return (
        <div className={`app ${theme}`}>
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