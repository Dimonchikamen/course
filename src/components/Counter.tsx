import {FC, useState} from "react";
import "./Counter.scss";
import s from "./Counter.module.scss";

export const Counter: FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => prev + 1);

    return <div>
        <h1>{count}</h1>
        <button className={s.button} onClick={increment}>+</button>
    </div>
}