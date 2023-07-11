

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

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
