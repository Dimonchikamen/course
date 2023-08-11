import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, Input } from "shared/ui";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./LoginForm.module.scss";

interface ILoginFormProps {
    className?: string;
}

export const LoginForm: FC<ILoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <form className={classNames(s.login_form, className)}>
            <Input
                autoFocus={true}
                type={"text"}
                label={t("Имя пользователя")}
            />
            <Input
                type={"password"}
                label={t("Пароль")}
            />
            <Button>{t("Войти")}</Button>
        </form>
    );
};
