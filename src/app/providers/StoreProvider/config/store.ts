import { combineReducers, configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { createReducerManager } from "app/providers/StoreProvider/config/reducerManager";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,

        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    //@ts-ignore;
    store.reducerManager = reducerManager;

    return store;
}

function getStoreTypes() {
    const store = configureStore<StateSchema>({
        reducer: combineReducers<StateSchema>({
            counter: counterReducer,
            user: userReducer,
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
