import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui";
import { ButtonVariant } from "shared/ui/Button/Button";

interface ILangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: ILangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const key = short ? "Короткий язык" : "Язык";

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            className={classNames(className)}
            variant={ButtonVariant.text}
            onClick={toggle}
        >
            {t(key)}
        </Button>
    );
});
