import { ReactNode } from "react";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import ProfileIcon from "shared/assets/sidebarIcons/profile.svg";
import NewsIcon from "shared/assets/sidebarIcons/news.svg";

type menuItem = {
    title: string;
    type: "sub" | "link";
    icon: ReactNode;
};

type SidebarLinkMenuItem = menuItem & {
    type: "link";
    path: string;
};

type SubMenuItem = {
    title: string;
    path: string;
};

type SidebarSubMenuItem = menuItem & {
    type: "sub";
    items: SubMenuItem[];
};

export type SidebarMenuItemType = SidebarLinkMenuItem | SidebarSubMenuItem;

export const sidebarMenu: SidebarMenuItemType[] = [
    {
        title: "Личный кабинет",
        type: "link",
        path: RoutePath.profile,
        icon: <ProfileIcon viewBox={"0 0 24 24"} />,
    },
    {
        title: "Новости",
        type: "link",
        path: RoutePath.news,
        icon: <NewsIcon viewBox={"0 0 24 24"} />,
    },
];
