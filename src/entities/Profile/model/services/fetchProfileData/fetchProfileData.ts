import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

type FetchProfileDataProps = {
    username: string;
};

export const fetchProfileData = createAsyncThunk<Profile, FetchProfileDataProps, ThunkConfig<string>>(
    "profile/fetchProfileData",
    async (data, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>(`/profile/${data.username}`);
            return response.data;
        } catch (e: unknown) {
            if (e instanceof AxiosError && e.response) {
                const status = e.response.status;
                const message = e.response.data.message;
                if (status >= 400 && status < 500) {
                    return rejectWithValue(message);
                } else if (status >= 500) {
                    //eslint-disable-next-line
                    console.error(message);
                    return rejectWithValue("Ошибка сервера, попробуйте позже");
                }
            }
            return rejectWithValue("Неизвестная ошибка");
        }
    }
);
