import { getUser } from "./getUser/getUser";
import { getAuthData } from "./getAuthData/getAuthData";

export const userSelectors = {
    getUser,
    getAuthData,
} as const;
