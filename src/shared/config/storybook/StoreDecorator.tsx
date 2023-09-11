import { DeepPartial } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";

export const StoreDecorator =
    (initialState: DeepPartial<StateSchema>) => (StoryComponent: () => ReturnType<StoryFn>) => {
        return (
            <StoreProvider initialState={initialState}>
                <StoryComponent />
            </StoreProvider>
        );
    };