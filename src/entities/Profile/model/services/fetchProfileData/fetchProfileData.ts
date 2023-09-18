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
