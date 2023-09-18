import axios from "axios";
import { ACCESS_TOKEN_KEY } from "shared/const/localStorage";

export const baseApi = axios.create({
    baseURL: __API_URL__,
    headers: {
        authorization: localStorage.getItem(ACCESS_TOKEN_KEY),
    },
});
