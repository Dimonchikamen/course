import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { ProfilePage } from "pages/ProfilePage";
import { RouteProps } from "react-router-dom";

export const AppRoutes = {
    MAIN: "main",
    PROFILE: "profile",
    NEWS: "news",
    //last
    NOT_FOUND: "not_found",
} as const;

type ValueOf<T extends object> = T[keyof T];

export const RoutePath: Readonly<Record<ValueOf<typeof AppRoutes>, string>> = {
    [AppRoutes.MAIN]: "/main",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.NEWS]: "/news",

    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Readonly<Record<ValueOf<typeof AppRoutes>, RouteProps>> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
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
