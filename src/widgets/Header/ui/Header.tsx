import { CSSProperties, FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant, Modal } from "shared/ui";
import { LangSwitcher } from "widgets/LangSwitcher";
import { SidebarToggleButton } from "widgets/Sidebar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import s from "./Header.module.scss";

interface INavbarProps {
    className?: string;
    style?: CSSProperties;
}

export const Header: FC<INavbarProps> = ({ className, style }) => {
    const { t } = useTranslation();
    const [modalIsOpen, setModalOpen] = useState(false);

    const toggleModalHandler = useCallback(() => setModalOpen(prev => !prev), []);

    return (
        <div
            className={classNames(s.header, className)}
            style={style}
        >
            <SidebarToggleButton />
            <ul className={s.customizers}>
                <li>
                    <ThemeSwitcher />
                </li>
                <li>
                    <LangSwitcher short={true} />
                </li>
                <li>
                    <Button
                        variant={ButtonVariant.text}
                        onClick={toggleModalHandler}
                    >
                        {t("Войти")}
                    </Button>
                    <Modal
                        isOpen={modalIsOpen}
                        toggle={toggleModalHandler}
                    >
                        модалка для входа
                    </Modal>
                </li>
            </ul>
        </div>
    );
};
