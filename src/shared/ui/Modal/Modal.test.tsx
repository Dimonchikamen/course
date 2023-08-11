import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useState } from "react";
import { Modal } from "./Modal";
import s from "./Modal.module.scss";

describe("Modal tests", () => {
    test("Render modal", () => {
        render(
            <Modal
                isOpen={true}
                onClose={() => {}}
            >
                Content
            </Modal>
        );
        expect(screen.getByTestId("modal-container")).toBeInTheDocument();
        expect(screen.getByTestId("modal-background")).toBeInTheDocument();
        expect(screen.getByTestId("modal-content")).toBeInTheDocument();
        expect(screen.getByTestId("modal-content")).toHaveTextContent("Content");
    });

    test("Toggle modal", async () => {
        const Example = () => {
            const [open, setOpen] = useState(false);
            const toggle = () => setOpen(prev => !prev);
            return (
                <div>
                    <button
                        onClick={toggle}
                        role={"button"}
                    />
                    <Modal
                        isOpen={open}
                        onClose={toggle}
                    />
                </div>
            );
        };
        render(<Example />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        const modalContainer = screen.getByTestId("modal-container");
        const modalBackground = screen.getByTestId("modal-background");
        const modalContent = screen.getByTestId("modal-content");
        expect(modalContainer).toHaveClass(s.open);
        expect(modalContent).toHaveClass(s.open);
        fireEvent.click(modalBackground);
        await waitFor(() => expect(modalContainer).not.toBeInTheDocument(), {
            timeout: 300,
        });
    });
});
