import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { User, userActions } from "entities/User";
import { USER_INFO_LOCALSTORAGE_KEY } from "shared/const/localStorage";

type LoginByUsernameProps = {
    username: string;
    password: string;
};

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    "login/loginByUsername",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8000/login", data);

            if (!response.data) {
                throw new Error("нет данных");
            }

            localStorage.setItem(USER_INFO_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e: unknown) {
            if (e instanceof AxiosError) {
                if (e.response.status >= 400 && e.response.status < 500) {
                    return thunkAPI.rejectWithValue(e.response.data.message);
                } else if (e.response.status >= 500) {
                    //eslint-disable-next-line
                    console.error(e.response.data.message);
                    return thunkAPI.rejectWithValue("Ошибка сервера, попробуйте позже");
                }
            }
            return thunkAPI.rejectWithValue("Неизвестная ошибка");
        }
    }
);
