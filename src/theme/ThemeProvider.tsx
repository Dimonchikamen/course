import {FC, ReactElement, ReactNode, useMemo, useState} from "react";
import {LOCAL_STORGE_THEME_KEY, ThemeContext, Theme} from "./ThemeContext";


const defaultTheme = localStorage.getItem(LOCAL_STORGE_THEME_KEY) as Theme || Theme.light;

interface IThemeProviderProps {
    children: ReactElement|ReactNode;
}

const ThemeProvider: FC<IThemeProviderProps> = ({ children}) => {
    const [theme, setTheme] = useState(defaultTheme);
    const defaultProps = useMemo(() => ({
        theme, setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;