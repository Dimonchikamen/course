import { FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";
import ThemeLightIcon from "shared/assets/icons/theme-light.svg";
import ThemeDarkIcon from "shared/assets/icons/theme-dark.svg";
import { Theme } from "app/providers/ThemeProvider";
import { Button, ButtonVariant } from "shared/ui";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./ThemeSwitcher.module.scss";

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            className={classNames(s.switcher, className)}
            variant={ButtonVariant.text}
            onClick={toggleTheme}
        >
            {theme === Theme.light ? <ThemeLightIcon /> : <ThemeDarkIcon />}
        </Button>
    );
};
