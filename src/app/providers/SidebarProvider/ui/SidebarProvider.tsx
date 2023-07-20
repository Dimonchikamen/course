import { FC, ReactNode, useCallback, useMemo, useState } from "react";
import { SidebarContext } from "app/providers/SidebarProvider/lib/SidebarContext";

interface ISidebarProviderProps {
    children: ReactNode;
}

export const SidebarProvider: FC<ISidebarProviderProps> = ({ children }) => {
    const [isOpen, setOpen] = useState(true);

    const toggleSidebar = useCallback(() => setOpen(prev => !prev), []);

    const defaultProps = useMemo(
        () => ({
            isOpen,
            toggleSidebar,
        }),
        [isOpen]
    );

    return <SidebarContext.Provider value={defaultProps}>{children}</SidebarContext.Provider>;
};
