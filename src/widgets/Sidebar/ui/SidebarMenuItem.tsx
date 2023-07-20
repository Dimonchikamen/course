import { FC } from "react";
import { useTranslation } from "react-i18next";
import { SidebarMenuItemType } from "widgets/Sidebar";
import { LinkMain } from "shared/ui";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./Sidebar.module.scss";
import { useLocation } from "react-router-dom";

interface ISidebarMenuItemProps {
    className?: string;
    item: SidebarMenuItemType;
}

export const SidebarMenuItem: FC<ISidebarMenuItemProps> = ({ className, item }) => {
    const { t } = useTranslation();
    const { pathname } = useLocation();

    if (item.type === "link") {
        const isActive = pathname.includes(item.path);
        return (
            <LinkMain
                className={classNames(s.sidebar_menu__item, { [s.active]: isActive }, className)}
                to={item.path}
            >
                {item.icon}
                <span>{t(item.title)}</span>
            </LinkMain>
        );
    } else {
        return <div className={classNames(s.sidebar_menu__item, className)}></div>;
    }
};
