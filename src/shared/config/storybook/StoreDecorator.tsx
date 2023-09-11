import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUserame/model/slice/loginSlice";

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>, asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>) =>
    (StoryComponent: () => ReturnType<StoryFn>) => {
        return (
            <StoreProvider
                initialState={initialState}
                asyncReducers={{ ...defaultReducers, ...asyncReducers }}
            >
                <StoryComponent />
            </StoreProvider>
        );
    };
