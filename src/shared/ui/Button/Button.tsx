import {ButtonHTMLAttributes, FC} from "react";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./Button.module.scss";

export enum ButtonVariant {
    text = "text",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
}

export const Button: FC<IButtonProps> = ({className, variant = ButtonVariant.text, children, ...rest }) => {
    return (
        <button className={classNames(className, s[variant])} {...rest} >{children}</button>
    );
}