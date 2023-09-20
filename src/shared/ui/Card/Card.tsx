import { ElementType, FC, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./Card.module.scss";

interface ICardProps {
    className?: string;
    children: ReactNode;
    tag?: ElementType;
}

export const Card: FC<ICardProps> = ({ className, children, tag }) => {
    const Tag = tag ?? "div";
    return <Tag className={classNames(s.card, className)}>{children}</Tag>;
};
