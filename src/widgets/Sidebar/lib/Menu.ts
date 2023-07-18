import {ReactNode} from "react";
import {RoutePath} from "shared/config/routerConfig/routerConfig";

type menuItem = {
    title: string;
    type: "sub"|"link";
    icon: ReactNode;
}

type SidebarLinkMenuItem = menuItem & {
    type: "link";
    path: string;
}

type SubMenuItem = {
    title: string;
    path: string;
}

type SidebarSubMenuItem = menuItem & {
    type: "sub";
    items: SubMenuItem[];
}

export type SidebarMenuItemType = SidebarLinkMenuItem | SidebarSubMenuItem;

export const sidebarMenu: SidebarMenuItemType[] = [
    {
        title: "Главная страница",
        type: "link",
        path: RoutePath.main,
        icon: null,
    },
    {
        title: "О сайте",
        type: "link",
        path: RoutePath.about,
        icon: null,
    },
];