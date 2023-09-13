import { useSidebar } from "app/providers/SidebarProvider";
import { memo, useMemo } from "react";
import { useLocation } from "react-router-dom";
import LogoMini from "shared/assets/icons/logo-mini.svg";
import Logo from "shared/assets/icons/logo.svg";
import { RoutePath } from "shared/config/routerConfig/routerConfig";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant, LinkMain } from "shared/ui";
import { sidebarMenu } from "../model/items";
import s from "./Sidebar.module.scss";
import { SidebarMenuItem } from "./SidebarMenuItem";

interface ISidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: ISidebarProps) => {
    const { isOpen, toggleSidebar } = useSidebar();
    const { pathname } = useLocation();

    const linkLogo = useMemo(
        () => (
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
        ),
        [isOpen]
    );

    return (
        <div
            className={classNames(s.sidebar, className, { [s.open]: isOpen })}
            data-testid="sidebar"
        >
            <div className={s.logo__container}>
                {linkLogo}
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
                        <SidebarMenuItem
                            item={item}
                            active={item.type === "link" && pathname.includes(item.path)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
});
