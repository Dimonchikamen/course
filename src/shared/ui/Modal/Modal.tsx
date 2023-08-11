import { FC, KeyboardEvent, MouseEvent, ReactElement, ReactNode, useCallback, useEffect, useState } from "react";
import { Portal } from "shared/ui";
import CrossIcon from "shared/assets/icons/cross-icon.svg";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./Modal.module.scss";

interface IModalProps {
    className?: string;
    isOpen: boolean;
    children?: ReactNode;
    size?: "m" | "l" | "xl";
    animationDurationMs?: number;
    external?: boolean;
    buttonClose?: ReactElement;
    unmountOnClose?: boolean;
    onClose: () => void;
}

export const Modal: FC<IModalProps> = ({
    className,
    isOpen = false,
    children,
    size = "l",
    external = false,
    buttonClose,
    animationDurationMs = 300,
    unmountOnClose = true,
    onClose,
}) => {
    const [isMounted, setMounted] = useState(false);
    const [isOpening, setIsOpening] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
            setIsOpening(true);
            setTimeout(() => {
                setIsOpening(false);
            }, animationDurationMs);
        } else if (unmountOnClose) {
            setTimeout(() => {
                setMounted(false);
            }, animationDurationMs);
        }
    }, [isOpen, unmountOnClose]);

    const clickContentHandler = useCallback((e: MouseEvent) => e.stopPropagation(), []);

    const keyboardEventHandler = useCallback(
        (e: Event) => {
            if ((e as unknown as KeyboardEvent)?.key?.toLowerCase() === "escape") {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", keyboardEventHandler);
        }

        return () => {
            window.removeEventListener("keydown", keyboardEventHandler);
        };
    }, [isOpen, keyboardEventHandler]);

    const clickButtonCloseHandler = (e: MouseEvent) => {
        e.stopPropagation();
        onClose();
    };

    if (!isMounted) {
        return null;
    }

    const closeButton = buttonClose ? (
        buttonClose
    ) : (
        <CrossIcon
            data-testid={"modal-close-button"}
            className={classNames(s.close_icon, { [s.external]: external })}
            onClick={clickButtonCloseHandler}
        />
    );

    return (
        <Portal>
            <div
                className={classNames(s.modal, { [s.open]: isOpen, [s.opening]: isOpening }, className)}
                style={{
                    transition: `opacity ${animationDurationMs}ms, 
                                 z-index ${animationDurationMs}ms`,
                    animationDuration: `${animationDurationMs}ms`,
                }}
                data-testid={"modal-container"}
            >
                <div
                    className={s.modal_background}
                    data-testid={"modal-background"}
                    onClick={onClose}
                >
                    {external && closeButton}
                    <div
                        className={classNames(s.content, s[size], {
                            [s.open]: isOpen,
                            [s.opening]: isOpening,
                        })}
                        style={{
                            transition: `transform ${animationDurationMs}ms`,
                            animationDuration: `${animationDurationMs}ms`,
                        }}
                        data-testid={"modal-content"}
                        onClick={clickContentHandler}
                    >
                        {!external && closeButton}
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
