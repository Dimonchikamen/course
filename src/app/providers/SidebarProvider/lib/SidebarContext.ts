import { createContext } from "react";

export type SidebarContextProps = {
    isOpen?: boolean;
    toggleSidebar?: () => void;
};

export const SidebarContext = createContext<SidebarContextProps>({
    isOpen: true,
});
