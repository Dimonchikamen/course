import { screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe("Counter", () => {
    test("Basic counter", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
    });

    test("increment", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        fireEvent.click(screen.getByTestId("counter-increment"));
        expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
    });

    test("decrement", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        fireEvent.click(screen.getByTestId("counter-decrement"));
        expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
    });
});
