import { ElementType, FC, HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./Layout.module.scss";

type ColSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | "auto";

interface IColProps extends HTMLAttributes<HTMLElement> {
    className?: string;
    children?: ReactNode;
    tag?: ElementType;
    size?: ColSize;
}

export const Col: FC<IColProps> = ({ className, children, tag, size = "auto", ...rest }) => {
    const Tag = tag ?? "div";
    return (
        <Tag
            className={classNames(s.col, s[`col_${size}`], className)}
            {...rest}
        >
            {children}
        </Tag>
    );
};
