import { screen, fireEvent } from "@testing-library/react";
import { SidebarProvider } from "app/providers/SidebarProvider";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "./Sidebar";
import { SidebarToggleButton } from "./SidebarToggleButton";
import s from "./Sidebar.module.scss";

describe("Sidebar", () => {
    test("Basic sidebar", () => {
        componentRender(
            <SidebarProvider>
                <Sidebar />
            </SidebarProvider>
        );
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("test toggle", () => {
        componentRender(
            <SidebarProvider>
                <SidebarToggleButton />
                <Sidebar />
            </SidebarProvider>
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
