import { CSSProperties, FC } from "react";
import { SidebarToggleButton } from "widgets/Sidebar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./Header.module.scss";

interface INavbarProps {
    className?: string;
    style?: CSSProperties;
}

export const Header: FC<INavbarProps> = ({ className, style }) => {
    return (
        <div
            className={classNames(s.header, className)}
            style={style}
        >
            <SidebarToggleButton />
            <ul className={s.customizers}>
                <li>
                    <ThemeSwitcher />
                </li>
                <li>
                    <LangSwitcher />
                </li>
            </ul>
        </div>
    );
};
