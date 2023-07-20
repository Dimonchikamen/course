import React, { createContext } from "react";

export enum Theme {
    light = "default",
    dark = "dark",
}

export type ThemeContextProps = {
    theme?: Theme;
    setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "@THEME";
