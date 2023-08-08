import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelectors } from "../model/selectors";
import { counterActions } from "../model/slice/counterSlice";
import { Button } from "shared/ui";

interface ICounterProps {
    className?: string;
}

export const Counter: FC<ICounterProps> = () => {
    const value = useSelector(counterSelectors.getCounterValue);
    const dispatch = useDispatch();

    const incrementHandler = useCallback(() => {
        dispatch(counterActions.increment());
    }, []);

    const decrementHandler = useCallback(() => {
        dispatch(counterActions.decrement());
    }, []);

    return (
        <div>
            <h1 data-testid={"counter-value"}>{value}</h1>
            <Button
                square={true}
                onClick={incrementHandler}
                data-testid={"counter-increment"}
            >
                +
            </Button>
            <Button
                square={true}
                onClick={decrementHandler}
                data-testid={"counter-decrement"}
            >
                -
            </Button>
        </div>
    );
};
