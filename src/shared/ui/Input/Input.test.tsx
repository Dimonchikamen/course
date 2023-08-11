import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChangeEvent, FC, useState } from "react";
import { Input } from "./Input";

describe("Input tests", () => {
    test("Render Input", () => {
        render(<Input />);
        expect(screen.getByTestId("input")).toBeInTheDocument();
    });

    test("Input custom class", () => {
        render(<Input className={"custom-class"} />);
        const input = screen.getByTestId("input");
        expect(input).toHaveClass("custom-class");
    });

    test("Input change", async () => {
        const Wrapper: FC = () => {
            const [value, setValue] = useState("");
            const changeValue = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

            return (
                <Input
                    value={value}
                    onChange={changeValue}
                />
            );
        };

        render(<Wrapper />);
        const input = screen.getByTestId("input");
        await userEvent.type(input, "qwe");
        expect(input).toHaveValue("qwe");
    });

    test("Input have label", () => {
        render(<Input label={"label"} />);
        const label = screen.getByTestId("input-label");
        expect(label).toBeInTheDocument();
        expect(label).toHaveTextContent("label");
    });

    test("Input label custom class", () => {
        render(
            <Input
                label={"label"}
                labelClassName={"custom-class"}
            />
        );
        const label = screen.getByTestId("input-label");
        expect(label).toHaveClass("custom-class");
    });

    test("Input have hint", () => {
        render(<Input hint={"hint"} />);
        const hint = screen.getByTestId("input-hint");
        expect(hint).toBeInTheDocument();
        expect(hint).toHaveTextContent("hint");
    });

    test("Input hint custom class", () => {
        render(
            <Input
                hint={"hint"}
                hintClassName={"custom-class"}
            />
        );
        const hint = screen.getByTestId("input-hint");
        expect(hint).toHaveClass("custom-class");
    });
});
