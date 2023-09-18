import { useContext } from "react";
import { SidebarContext } from "./SidebarContext";

type UseSidebarResult = {
    toggleSidebar: () => void;
    isOpen: boolean;
};

export const useSidebar = (): UseSidebarResult => {
    const { isOpen = true, toggleSidebar = () => {} } = useContext(SidebarContext);

    return { isOpen, toggleSidebar };
};
