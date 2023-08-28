import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { loginReducer } from "features/AuthByUserame";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: combineReducers<StateSchema>({
            counter: counterReducer,
            user: userReducer,
            loginForm: loginReducer,
        }),
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

function getStoreTypes() {
    const store = configureStore<StateSchema>({
        reducer: combineReducers<StateSchema>({
            counter: counterReducer,
            user: userReducer,
            loginForm: loginReducer,
        }),
        devTools: __IS_DEV__,
    });

    return {
        getState: store.getState,
        dispatch: store.dispatch,
    };
}

// hack for get redux store types
export type RootState = ReturnType<Pick<ReturnType<typeof getStoreTypes>, "getState">["getState"]>;
export type AppDispatch = Pick<ReturnType<typeof getStoreTypes>, "dispatch">["dispatch"];
