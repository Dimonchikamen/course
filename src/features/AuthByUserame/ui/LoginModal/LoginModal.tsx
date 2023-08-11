import { FC } from "react";
import { Modal } from "shared/ui";
import { LoginForm } from "../LoginForm/LoginForm";

import { classNames } from "shared/lib/classNames/classNames";

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal: FC<ILoginModalProps> = ({ className, isOpen, onClose }) => {
    return (
        <Modal
            className={classNames(className)}
            isOpen={isOpen}
            onClose={onClose}
            size={"l"}
        >
            <LoginForm />
        </Modal>
    );
};
