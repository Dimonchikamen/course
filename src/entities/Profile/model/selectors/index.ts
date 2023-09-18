import { getProfileIsLoading } from "./getProfileIsLoading/getProfileIsLoading";
import { getProfileData } from "./getProfileData/getProfileData";
import { getProfileError } from "./getProfileError/getProfileError";

export const profileSelectors = {
    getProfileIsLoading,
    getProfileData,
    getProfileError,
} as const;
