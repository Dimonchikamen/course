import { FC, ReactElement, ReactNode, useMemo, useState } from "react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "../lib/ThemeContext";

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.light;

interface IThemeProviderProps {
    initialTheme?: Theme;
    children: ReactElement | ReactNode;
}

export const ThemeProvider: FC<IThemeProviderProps> = ({ initialTheme = Theme.light, children }) => {
    const [theme, setTheme] = useState(initialTheme || defaultTheme);
    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        [theme]
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
