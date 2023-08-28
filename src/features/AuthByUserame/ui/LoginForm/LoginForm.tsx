import React, { FormEvent, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "shared/model/hooks";
import { loginActions } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { authByUsernameSelectors } from "../../model/selectors";
import { Button, Input } from "shared/ui";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./LoginForm.module.scss";

interface ILoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: ILoginFormProps) => {
    const { t } = useTranslation();
    const { isLoading, username, password, error } = useAppSelector(authByUsernameSelectors.getLoginForm);
    const dispatch = useAppDispatch();

    const changeUsernameHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => dispatch(loginActions.setUsername(e.target.value)),
        [dispatch]
    );

    const changePasswordHandler = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => dispatch(loginActions.setPassword(e.target.value)),
        [dispatch]
    );

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(loginByUsername({ username, password }));
    };

    return (
        <form
            className={classNames(s.login_form, className)}
            onSubmit={submitHandler}
            data-testid={"login-form"}
        >
            <Input
                autoFocus={true}
                type={"text"}
                label={t("Имя пользователя")}
                value={username}
                onChange={changeUsernameHandler}
                data-testid={"login-input"}
            />
            <Input
                type={"password"}
                label={t("Пароль")}
                value={password}
                onChange={changePasswordHandler}
                data-testid={"password-input"}
            />
            {error && <span className={s.error}>{t(error)}</span>}
            <Button disabled={isLoading}>{t("Войти")}</Button>
        </form>
    );
});
