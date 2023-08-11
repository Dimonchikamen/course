import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: combineReducers({
            counter: counterReducer,
            user: userReducer,
        }),
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
