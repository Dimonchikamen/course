import {FC} from "react";
import {useSidebar} from "app/providers/SidebarProvider/lib/useSidebar";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import ToggleIcon from "shared/assets/icons/toggle-sidebar.svg";
import {RoutePath} from "shared/config/routerConfig/routerConfig";
import {Button,ButtonVariant, LinkMain} from "shared/ui";

import {classNames} from "shared/lib/classNames/classNames";
import s from "./Header.module.scss";


interface INavbarProps {
    className?: string;
}

export const Header: FC<INavbarProps> = ({ className }) => {
    const { toggleSidebar } = useSidebar();
    return (
        <div className={classNames(s.header, className)}>
            <Button
                className={s.toggle_button}
                variant={ButtonVariant.text}
                onClick={toggleSidebar}
            >
                <ToggleIcon />
            </Button>
            <ul className={classNames(s.link_list, className)}>
                <li>
                    <LinkMain to={RoutePath.main}>Главная</LinkMain>
                </li>
                <li>
                    <LinkMain to={RoutePath.about}>About</LinkMain>
                </li>
            </ul>
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