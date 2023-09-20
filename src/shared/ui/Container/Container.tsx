import { ElementType, FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./Container.module.scss";

interface IContainerProps {
    className?: string;
    fluid?: boolean;
    children: ReactNode;
    tag?: ElementType;
}

export const Container: FC<IContainerProps> = ({ className, fluid = true, tag, children }) => {
    const ResultTag = tag ?? "div";
    return <ResultTag className={classNames(s.container, { [s.fluid]: fluid }, className)}>{children}</ResultTag>;
};
