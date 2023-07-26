import { FC } from "react";
import { useSidebar } from "app/providers/SidebarProvider";
import ToggleIcon from "shared/assets/icons/toggle-sidebar.svg";
import { Button, ButtonVariant } from "shared/ui";

import s from "./SidebarToggleButton.module.scss";

export const SidebarToggleButton: FC = () => {
    const { toggleSidebar } = useSidebar();
    return (
        <Button
            className={s.toggle_button}
            data-testid="toggle-sidebar"
            variant={ButtonVariant.text}
            onClick={toggleSidebar}
        >
            <ToggleIcon />
        </Button>
    );
};
