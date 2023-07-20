import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { NotFoundPage } from "pages/NotFoundPage";

export enum AppRoutes {
    PROFILE = "profile",
    NEWS = "news",
    NOT_FOUND = "not_found",
}

export const RoutePath: Readonly<Record<AppRoutes, string>> = {
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.NEWS]: "/news",

    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Readonly<Record<AppRoutes, RouteProps>> = {
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <MainPage />,
    },
    [AppRoutes.NEWS]: {
        path: RoutePath.news,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
