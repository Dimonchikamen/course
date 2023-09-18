import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { profileSelectors } from "../../model/selectors";
import { Text } from "shared/ui/Text/Text";
import { Button } from "shared/ui";
import { classNames } from "shared/lib/classNames/classNames";
import s from "./ProfileCard.module.scss";

interface IProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<IProfileCardProps> = ({ className }) => {
    const { t } = useTranslation("profile");
    const isLoading = useSelector(profileSelectors.getProfileIsLoading);
    const data = useSelector(profileSelectors.getProfileData);
    const error = useSelector(profileSelectors.getProfileError);

    if (!data) {
        return (
            <div className={classNames(className)}>
                <Text text={"Пользователь заблокирован"} />
            </div>
        );
    }

    return (
        <div className={classNames(s.profile, className)}>
            <Text
                title={`${data.name} ${data.surname}`}
                text={data.username}
            />
            <Button>{t("Редактировать")}</Button>
        </div>
    );
};
