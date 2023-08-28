import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text tests", () => {
    test("Render text", () => {
        render(
            <Text
                title={"qwe"}
                text={"qwe"}
            />
        );
        expect(screen.getByTestId("text")).toBeInTheDocument();
        expect(screen.getByTestId("title-text")).toBeInTheDocument();
        expect(screen.getByTestId("text-text")).toBeInTheDocument();
    });

    test("Render without title", () => {
        render(<Text text={"qwe"} />);
        expect(screen.queryByTestId("title-text")).not.toBeInTheDocument();
    });

    test("Render with classNames", () => {
        render(
            <Text
                className={"container-class"}
                titleClassName={"title-class"}
                textClassName={"text-class"}
                title={"qwe"}
                text={"qwe"}
            />
        );
        expect(screen.getByTestId("text")).toHaveClass("container-class");
        expect(screen.getByTestId("title-text")).toHaveClass("title-class");
        expect(screen.getByTestId("text-text")).toHaveClass("text-class");
    });
});
