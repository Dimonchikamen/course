import {FC} from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {Link } from "react-router-dom";
import {AppRouter} from "app/providers/router";


const App: FC = () => {
    const { theme, toggleTheme } = useTheme()


    return (
        <div className={classNames("app", theme)}>
            <button onClick={toggleTheme}>Изменить тему</button>
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>About</Link>
            <AppRouter />
        </div>
    )
}

export default App;