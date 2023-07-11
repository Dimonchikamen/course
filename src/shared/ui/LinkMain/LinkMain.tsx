import { FC } from "react";
import {Link, LinkProps} from "react-router-dom";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./LinkMain.module.scss";



interface ILinkMainProps extends LinkProps{
    className?: string;
    variant?: "default"|"secondary";
}

export const LinkMain: FC<ILinkMainProps> = ({ className, variant = "default", to, children, ...rest }) => {
    return (
        <Link to={to} className={classNames(s.link, s[variant], className)} {...rest}>
            {children}
        </Link>
    );
}