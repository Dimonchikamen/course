import { FC } from "react";

import s from "./Loader.module.scss";

interface ILoaderProps {
    backgroundColor?: string;
    color?: string;
}

export const Loader: FC<ILoaderProps> = ({
    backgroundColor = "var(--inverted-bg-color)",
    color = "var(--main-color)",
}) => {
    return (
        <div
            className={s.loader}
            style={{ backgroundColor }}
        >
            <span
                className={s.loader_item}
                style={{ backgroundColor: color, color }}
            />
        </div>
    );
};
