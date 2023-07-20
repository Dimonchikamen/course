import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./Button.module.scss";

export enum ButtonVariant {
    text = "text",
    default = "default",
    invert = "invert",
    secondary = "secondary",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
}

export const Button: FC<IButtonProps> = ({ className, variant = ButtonVariant.default, children, ...rest }) => {
    return (
        <button
            className={classNames(s.button, s[variant], className)}
            {...rest}
        >
            {children}
        </button>
    );
};
