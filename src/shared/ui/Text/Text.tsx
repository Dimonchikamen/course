import { FC } from "react";
import { classNames } from "shared/lib/classNames/classNames";

import s from "./Text.module.scss";

interface ITextProps {
    className?: string;
    titleClassName?: string;
    textClassName?: string;
    title?: string;
    text: string;
}

export const Text: FC<ITextProps> = ({ className, titleClassName, textClassName, title, text }) => {
    return (
        <div
            className={classNames(className)}
            data-testid={"text"}
        >
            {title && (
                <h5
                    className={classNames(s.title, titleClassName)}
                    data-testid={"title-text"}
                >
                    {title}
                </h5>
            )}
            <p
                className={classNames(s.text, textClassName)}
                data-testid={"text-text"}
            >
                {text}
            </p>
        </div>
    );
};
