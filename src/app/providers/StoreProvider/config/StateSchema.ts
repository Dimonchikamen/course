import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router";
import { CounterSchema } from "entities/Counter";
import { ProfileSchema } from "entities/Profile";
import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUserame";

export type StateSchema = {
    counter: CounterSchema;
    user: UserSchema;
    profile?: ProfileSchema;

    //Async reducers
    loginForm?: LoginSchema;
};

export type StateSchemaKey = keyof StateSchema;

export type ReduxStoreWithManager = EnhancedStore<StateSchema> & {
    reducerManager: ReducerManager;
};

export type ReducerManager = {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: Reducer<CombinedState<StateSchema>>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
};

export type ThunkExtraArg = {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
};

export type ThunkConfig<T> = {
    rejectValue: T;
    extra: ThunkExtraArg;
};
