import { FC, ReactNode } from "react";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/store";
import {useNavigate} from "react-router-dom";

interface IStoreProviderProps {
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    children?: ReactNode;
}

export const StoreProvider: FC<IStoreProviderProps> = ({ initialState, asyncReducers, children }) => {
    const navigate = useNavigate();
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate);

    return <Provider store={store}>{children}</Provider>;
};
