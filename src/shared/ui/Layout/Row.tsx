import { ElementType, FC, HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./Layout.module.scss";

interface IRowProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    children?: ReactNode;
    tag?: ElementType;
}

export const Row: FC<IRowProps> = ({ className, children, tag, ...rest }) => {
    const Tag = tag ?? "div";
    return (
        <Tag
            className={classNames(s.row, className)}
            {...rest}
        >
            {children}
        </Tag>
    );
};
