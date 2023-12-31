import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
