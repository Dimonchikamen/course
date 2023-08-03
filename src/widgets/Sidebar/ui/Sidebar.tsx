import { useSidebar } from "app/providers/SidebarProvider";
import { FC } from "react";
import LogoMini from "shared/assets/icons/logo-mini.svg";
import Logo from "shared/assets/icons/logo.svg";
import { RoutePath } from "shared/config/routerConfig/routerConfig";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant, LinkMain } from "shared/ui";
import { sidebarMenu, SidebarMenuItem } from "widgets/Sidebar";
import s from "./Sidebar.module.scss";

interface ISidebarProps {
    className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const { isOpen, toggleSidebar } = useSidebar();

    return (
        <div
            className={classNames(s.sidebar, className, { [s.open]: isOpen })}
            data-testid="sidebar"
        >
            <div className={s.logo__container}>
                <LinkMain to={RoutePath.news}>
                    {isOpen ? (
                        <Logo
                            width={"100%"}
                            height={"100%"}
                            viewBox={"0 0 647 184"}
                        />
                    ) : (
                        <LogoMini
                            width={57}
                            height={57}
                            viewBox={"0 0 248 247"}
                        />
                    )}
                </LinkMain>
                {isOpen && (
                    <Button
                        className={s.mobile_toggle__button}
                        variant={ButtonVariant.text}
                        onClick={toggleSidebar}
                    >
                        {"<"}
                    </Button>
                )}
            </div>
            <ul className={s.sidebar_menu__list}>
                {sidebarMenu.map((item, i) => (
                    <li key={i}>
                        <SidebarMenuItem item={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
