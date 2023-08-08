import { getCounter } from "./getCounter/getCounter";
import { getCounterValue } from "./getCounterValue/getCounterValue";

export const counterSelectors = {
    getCounter,
    getCounterValue,
} as const;
