import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthByUserame/model/slice/loginSlice";
import { ReducersList } from "shared/lib/components";
import { DeepPartial } from "shared/model/types";
import { BrowserRouter } from "react-router-dom";

const defaultReducers: ReducersList = {
    loginForm: loginReducer,
};

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (StoryComponent: () => ReturnType<StoryFn>) => {
        return (
            <BrowserRouter>
                <StoreProvider
                    initialState={initialState}
                    asyncReducers={{ ...defaultReducers, ...asyncReducers }}
                >
                    <StoryComponent />
                </StoreProvider>
            </BrowserRouter>
        );
    };
