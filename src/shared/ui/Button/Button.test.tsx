import { render, screen } from "@testing-library/react";
import { Button, ButtonVariant } from "./Button";
import s from "./Button.module.scss";

describe("Button", () => {
    test("Default button", () => {
        render(<Button>qwe</Button>);
        expect(screen.getByText("qwe")).toBeInTheDocument();
    });

    test("Outline Button", () => {
        render(<Button variant={ButtonVariant.outline}>qwe</Button>);
        expect(screen.getByText("qwe")).toHaveClass(s.outline);
    });
});
