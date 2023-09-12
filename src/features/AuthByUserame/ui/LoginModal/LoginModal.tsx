import { FC, Suspense } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import { Loader, Modal } from "shared/ui";
import { LoginFormLazy } from "../LoginForm/LoginForm.lazy";

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
            <Suspense fallback={<Loader />}>
                <LoginFormLazy onSuccessLogin={onClose} />
            </Suspense>
        </Modal>
    );
};
