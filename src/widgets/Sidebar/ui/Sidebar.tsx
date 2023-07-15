import {FC } from "react";
import {useSidebar} from "app/providers/SidebarProvider/lib/useSidebar";
import Logo from "shared/assets/icons/logo.svg";
import LogoMini from "shared/assets/icons/logo-mini.svg";

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
                {isOpen ?
                    (
                        <Logo
                            width={"100%"}
                            height={"auto"}
                            viewBox={"0 0 914 260"}
                        />
                    ) : (
                        <LogoMini
                            width={42}
                            height={42}
                            viewBox={"0 0 248 247"}
                        />
                    )
                }
            </div>
        </div>
    );
};