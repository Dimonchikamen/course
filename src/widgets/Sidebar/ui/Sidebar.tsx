import {FC, useCallback, useState} from "react";
import {Button} from "shared/ui";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./Sidebar.module.scss";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

interface ISidebarProps {
    className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
    const [isOpen, setOpen] = useState(true);

    const toggleHandler = useCallback(() => setOpen(prev => !prev), []);

    return (
        <div className={classNames(s.sidebar, className, {[s.open]: isOpen})}>
            <Button onClick={toggleHandler}>toggle</Button>
            <div className={s.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};