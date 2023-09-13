import { userActions, userSelectors } from "entities/User";
import { LoginModal } from "features/AuthByUserame";
import { CSSProperties, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonVariant } from "shared/ui";
import { LangSwitcher } from "widgets/LangSwitcher";
import { SidebarToggleButton } from "widgets/Sidebar";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import s from "./Header.module.scss";

interface IHeaderProps {
    className?: string;
    style?: CSSProperties;
}

export const Header = memo(({ className, style }: IHeaderProps) => {
    const userAuthData = useSelector(userSelectors.getAuthData);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [modalIsOpen, setModalOpen] = useState(false);

    const toggleModalHandler = useCallback(() => setModalOpen(prev => !prev), []);

    const logoutHandler = useCallback(() => dispatch(userActions.logout()), []);

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
                        onClick={userAuthData ? logoutHandler : toggleModalHandler}
                    >
                        {userAuthData ? t("Выйти") : t("Войти")}
                    </Button>
                    <LoginModal
                        isOpen={modalIsOpen}
                        onClose={toggleModalHandler}
                    />
                </li>
            </ul>
        </div>
    );
});
