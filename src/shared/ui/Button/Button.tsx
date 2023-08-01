import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./Button.module.scss";

export enum ButtonVariant {
    text = "text",
    default = "default",
    outline = "outline",
    secondary = "secondary",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    // user className for customize button
    className?: string;
    // button ui variant
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
