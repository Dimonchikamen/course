import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { USER_INFO_LOCALSTORAGE_KEY } from "shared/const/localStorage";
import { SuccessCallback } from "shared/model/types";
import { RoutePath } from "shared/config/routerConfig/routerConfig";

type LoginByUsernameProps = {
    username: string;
    password: string;
    successCallback?: SuccessCallback;
};

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    "login/loginByUsername",
    async (data, thunkAPI) => {
        const { extra, dispatch, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.post<User>("/login", data);

            if (!response.data) {
                throw new Error("нет данных");
            }

            localStorage.setItem(USER_INFO_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate?.(RoutePath.news);
            data.successCallback?.();

            return response.data;
        } catch (e: unknown) {
            if (e instanceof AxiosError) {
                if (e.response.status >= 400 && e.response.status < 500) {
                    return rejectWithValue(e.response.data.message);
                } else if (e.response.status >= 500) {
                    //eslint-disable-next-line
                    console.error(e.response.data.message);
                    return rejectWithValue("Ошибка сервера, попробуйте позже");
                }
            }
            return rejectWithValue("Неизвестная ошибка");
        }
    }
);
