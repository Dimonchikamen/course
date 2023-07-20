import { FC } from "react";
import { useTranslation } from "react-i18next";

const AboutPage: FC = () => {
    const { t } = useTranslation("about");

    return (
        <div>
            <h1>{t("О сайте")}</h1>
        </div>
    );
};

export default AboutPage;
