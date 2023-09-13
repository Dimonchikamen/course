import { Theme, useTheme } from "app/providers/ThemeProvider";
import { memo } from "react";
import ThemeDarkIcon from "shared/assets/icons/theme-dark.svg";
import ThemeLightIcon from "shared/assets/icons/theme-light.svg";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant } from "shared/ui";
import s from "./ThemeSwitcher.module.scss";

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: IThemeSwitcherProps) => {
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
});
