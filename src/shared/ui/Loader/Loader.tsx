import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./Loader.module.scss";

interface ILoaderProps {
    className?: string;
}

export const Loader: FC<ILoaderProps> = ({ className }) => {
    return (
        <div className={classNames(s.lds_ring, className)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
