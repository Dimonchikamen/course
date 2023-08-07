import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonVariant } from "shared/ui";

const MainPage: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t("Главная страница")}{" "}
            <div>
                <Button
                    square={true}
                    variant={ButtonVariant.text}
                    buttonSize={"xl"}
                >
                    +
                </Button>
            </div>
        </div>
    );
};

export default MainPage;
