import { InputHTMLAttributes, memo, useId } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./Input.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    containerClassName?: string;
    labelClassName?: string;
    className?: string;
    hintClassName?: string;
    label?: string;
    hint?: string;
    autoFocus?: boolean;
    invalid?: boolean;
}

export const Input = memo((props: IInputProps) => {
    const { containerClassName, labelClassName, className, hintClassName, label, hint, invalid, ...rest } = props;
    const id = useId();
    return (
        <div className={classNames(s.container, { [s.invalid]: invalid }, containerClassName)}>
            {label && (
                <label
                    htmlFor={id}
                    className={classNames(s.label, labelClassName)}
                    data-testid={"input-label"}
                >
                    {label}
                </label>
            )}
            <input
                id={id}
                data-testid={"input"}
                className={classNames(s.input, className)}
                {...rest}
            />
            {hint && (
                <span
                    className={classNames(s.hint, hintClassName)}
                    data-testid={"input-hint"}
                >
                    {hint}
                </span>
            )}
        </div>
    );
});
