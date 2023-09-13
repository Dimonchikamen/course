import { profileReducer } from "entities/Profile";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader } from "shared/lib/components";
import { ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const reducers: ReducersList = { profile: profileReducer };

interface IProfilePageProps {
    className?: string;
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <div className={classNames(className)}>{t("Личный кабинет")}</div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
