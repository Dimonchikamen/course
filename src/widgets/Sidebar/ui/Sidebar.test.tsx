import { BrowserRouter } from "react-router-dom";
import { screen, fireEvent } from "@testing-library/react";
import { SidebarProvider } from "app/providers/SidebarProvider";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { Sidebar } from "./Sidebar";
import { SidebarToggleButton } from "./SidebarToggleButton";
import s from "./Sidebar.module.scss";

describe("Sidebar", () => {
    test("Basic sidebar", () => {
        renderWithTranslation(
            <BrowserRouter>
                <SidebarProvider>
                    <Sidebar />
                </SidebarProvider>
            </BrowserRouter>
        );
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("test toggle", () => {
        renderWithTranslation(
            <BrowserRouter>
                <SidebarProvider>
                    <SidebarToggleButton />
                    <Sidebar />
                </SidebarProvider>
            </BrowserRouter>
        );
        const toggleButton = screen.getByTestId("toggle-sidebar");
        expect(toggleButton).toBeInTheDocument();

        const sidebarBeforeClick = screen.getByTestId("sidebar");
        expect(sidebarBeforeClick).toHaveClass(s.open);

        fireEvent.click(toggleButton);

        const sidebarAfterClick = screen.getByTestId("sidebar");
        expect(sidebarAfterClick).not.toHaveClass(s.open);

        fireEvent.click(toggleButton);

        const sidebarFinalClick = screen.getByTestId("sidebar");
        expect(sidebarFinalClick).toHaveClass(s.open);
    });
});
