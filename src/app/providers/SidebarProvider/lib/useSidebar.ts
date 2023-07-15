import {useContext} from "react";
import {SidebarContext} from "app/providers/SidebarProvider/lib/SidebarContext";

type UseSidebarResult = {
    toggleSidebar: () => void;
    isOpen: boolean;
}

export const useSidebar = (): UseSidebarResult => {
    const { isOpen, toggleSidebar } = useContext(SidebarContext);

    return { isOpen, toggleSidebar };
};