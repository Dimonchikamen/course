import {FC} from "react";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui";
import {ButtonVariant} from "shared/ui/Button/Button";

import {classNames} from "shared/lib/classNames/classNames";

interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            className={classNames(className)}
            variant={ButtonVariant.text}
            onClick={toggle}
        >
            {t("Язык")}
        </Button>
    );
};