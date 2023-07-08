declare module "*.scss" {
    interface IClassNames {
        [clasName: string]: string;
    }
    const classNames: IClassNames;
    export = classNames;
}