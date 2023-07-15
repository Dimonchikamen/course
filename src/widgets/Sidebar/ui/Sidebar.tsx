import {FC } from "react";
import {useSidebar} from "app/providers/SidebarProvider/lib/useSidebar";
import Logo from "shared/assets/icons/logo.svg";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./Sidebar.module.scss";

interface ISidebarProps {
    className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const { isOpen } = useSidebar();


    return (
        <div className={classNames(s.sidebar, className, {[s.open]: isOpen})}>
            <div className={s.logo__container}>
                <Logo width={900}/>
            </div>
        </div>
    );
};