import {FC, Suspense} from "react";
import {Counter} from "./components/Counter";
import "./index.scss";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";

const App: FC = () => {
    return (
        <div className="app">
            <Link to={"/about"}>Главная</Link>
            <Link to={"/main"}>About</Link>
            <Suspense fallback={<div>Loading</div>}>
            <Routes>
                    <Route path={"/about"} element={<AboutPageLazy />}/>
                    <Route path={"/main"} element={<MainPageLazy />}/>
            </Routes>
            </Suspense>
            qweqweeqwewqee
            <Counter/>
        </div>
    )
}

export default App;