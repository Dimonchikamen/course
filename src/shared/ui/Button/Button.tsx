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
    square?: boolean;
    buttonSize?: "m" | "l" | "xl";
}

export const Button: FC<IButtonProps> = ({
    className,
    variant = ButtonVariant.default,
    square = false,
    buttonSize = "m",
    children,
    ...rest
}) => {
    return (
        <button
            className={classNames(s.button, s[variant], { [s.square]: square }, s[buttonSize], className)}
            {...rest}
        >
            {children}
        </button>
    );
};
