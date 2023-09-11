import { getLoginError } from "./getLoginError/getLoginError";
import { getLoginForm } from "./getLoginForm/getLoginForm";
import { getLoginIsLoading } from "./getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "./getLoginPassword/getLoginPassword";
import { getLoginUsername } from "./getLoginUsername/getLoginUsername";

export const authByUsernameSelectors = {
    getLoginForm,
    getLoginIsLoading,
    getLoginError,
    getLoginUsername,
    getLoginPassword,
} as const;
