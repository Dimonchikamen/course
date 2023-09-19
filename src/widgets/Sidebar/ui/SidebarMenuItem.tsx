import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { LinkMain } from "shared/ui";
import { SidebarMenuItemType } from "widgets/Sidebar";
import s from "./Sidebar.module.scss";

interface ISidebarMenuItemProps {
    className?: string;
    item: SidebarMenuItemType;
    active?: boolean;
    collapsed?: boolean;
}

export const SidebarMenuItem = memo(({ className, item, active = false, collapsed = false }: ISidebarMenuItemProps) => {
    const { t } = useTranslation();

    if (item.type === "link") {
        return (
            <LinkMain
                className={classNames(s.sidebar_menu__item, { [s.active]: active }, className)}
                to={item.path}
            >
                {item.icon}
                <span>{t(item.title)}</span>
            </LinkMain>
        );
    } else {
        return <div className={classNames(s.sidebar_menu__item, className)}></div>;
    }
});
