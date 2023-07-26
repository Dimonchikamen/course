import { FC } from "react";
import { SidebarToggleButton } from "widgets/Sidebar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./Header.module.scss";

interface INavbarProps {
    className?: string;
}

export const Header: FC<INavbarProps> = ({ className }) => {
    return (
        <div className={classNames(s.header, className)}>
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
