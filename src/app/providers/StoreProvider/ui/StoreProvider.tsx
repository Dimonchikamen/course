import { DeepPartial } from "@reduxjs/toolkit";
import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

interface IStoreProviderProps {
    initialState?: DeepPartial<StateSchema>;
    children?: ReactNode;
}

export const StoreProvider: FC<IStoreProviderProps> = ({ initialState, children }) => {
    const store = createReduxStore(initialState as StateSchema);

    return <Provider store={store}>{children}</Provider>;
};
