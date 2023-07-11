import {FC} from "react";
import {LinkMain} from "shared/ui";
import {RoutePath} from "shared/config/routerConfig/routerConfig";

import {classNames} from "shared/lib/classNames/classNames";
import s from "./Navbar.module.scss";


interface INavbarProps {
    className?: string;
}

export const Navbar: FC<INavbarProps> = ({ className }) => {
    return <ul className={classNames(s.navbar, className)}>
        <li>
            <LinkMain variant={"secondary"} to={RoutePath.main}>Главная</LinkMain>
        </li>
        <li>
            <LinkMain to={RoutePath.about}>About</LinkMain>
        </li>
    </ul>
}