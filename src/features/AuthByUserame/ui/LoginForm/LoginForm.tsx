import React, { FormEvent, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { DynamicModuleLoader } from "shared/lib/components";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/storeHooks";
import { SuccessCallback } from "shared/model/types";
import { Button, Input } from "shared/ui";
import { authByUsernameSelectors } from "../../model/selectors";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./LoginForm.module.scss";

export interface ILoginFormProps {
    className?: string;
    onSuccessLogin?: SuccessCallback;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccessLogin }: ILoginFormProps) => {
    const { t } = useTranslation();

    const isLoading = useSelector(authByUsernameSelectors.getLoginIsLoading);
    const error = useSelector(authByUsernameSelectors.getLoginError);
    const username = useSelector(authByUsernameSelectors.getLoginUsername);
    const password = useSelector(authByUsernameSelectors.getLoginPassword);
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
        dispatch(loginByUsername({ username, password, successCallback: onSuccessLogin }));
    };

    return (
        <DynamicModuleLoader reducers={initialReducers}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
