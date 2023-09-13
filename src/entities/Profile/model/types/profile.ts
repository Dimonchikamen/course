import { Currency } from "shared/const/common";

export type Profile = {
    id: string;
    username: string;
    name: string;
    surname: string;
    age: number;
    currency: Currency;
    currencyCount: number;
    avatar: string | null;
};

export type ProfileSchema = {
    isLoading: boolean;
    readonly: boolean;
    data?: Profile;
    error?: string;
};
