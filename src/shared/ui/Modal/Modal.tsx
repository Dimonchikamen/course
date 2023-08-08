import { FC, KeyboardEvent, MouseEvent, ReactNode, useCallback, useEffect } from "react";
import { Portal } from "shared/ui";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./Modal.module.scss";

interface IModalProps {
    className?: string;
    isOpen: boolean;
    children?: ReactNode;
    size?: "m" | "l" | "xl";
    toggle: () => void;
}

export const Modal: FC<IModalProps> = ({ className, isOpen = false, children, size = "m", toggle }) => {
    const clickContentHandler = useCallback((e: MouseEvent) => e.stopPropagation(), []);

    const keyboardEventHandler = useCallback(
        (e: KeyboardEvent) => {
            if (e.key.toLowerCase() === "escape") {
                toggle();
            }
        },
        [toggle]
    );

    useEffect(() => {
        if (isOpen) {
            // @ts-ignore
            window.addEventListener("keydown", keyboardEventHandler);
        }

        return () => {
            // @ts-ignore
            window.removeEventListener("keydown", keyboardEventHandler);
        };
    }, [isOpen, keyboardEventHandler]);

    return (
        <Portal>
            <div className={classNames(s.modal, { [s.open]: isOpen }, className)}>
                <div
                    className={s.modal_background}
                    onClick={toggle}
                >
                    <div
                        className={classNames(s.content, s[size], { [s.open]: isOpen })}
                        onClick={clickContentHandler}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
