import { FC } from "react";
import { useSidebar } from "app/providers/SidebarProvider";
import ToggleIcon from "shared/assets/icons/toggle-sidebar.svg";
import { Button, ButtonVariant } from "shared/ui";

export const SidebarToggleButton: FC = () => {
    const { toggleSidebar } = useSidebar();
    return (
        <Button
            data-testid="toggle-sidebar"
            variant={ButtonVariant.text}
            onClick={toggleSidebar}
        >
            <ToggleIcon />
        </Button>
    );
};
