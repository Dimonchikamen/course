import { render, screen } from "@testing-library/react";
import { Button, ButtonVariant } from "./Button";
import s from "./Button.module.scss";

describe("Button", () => {
    test("Default button", () => {
        render(<Button>qwe</Button>);
        expect(screen.getByText("qwe")).toBeInTheDocument();
    });

    test("Invert Button", () => {
        render(<Button variant={ButtonVariant.invert}>qwe</Button>);
        expect(screen.getByText("qwe")).toHaveClass(s.invert);
        screen.debug();
    });
});
