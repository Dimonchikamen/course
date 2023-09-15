declare module "*.scss" {
    interface IClassNames {
        [clasName: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.svg" {
    import React from "react";
    const content: React.FunctionComponent<React.SVGProps<SVGElement>>;
    export default content;
}

declare const __IS_DEV__: boolean;
declare const __API_URL__: string;

// hack for use this types in "shared/model/*"
declare type RootState = import("../providers/StoreProvider").RootState;
declare type AppDispatch = import("../providers/StoreProvider").AppDispatch;

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
