import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchProfileData, ProfileCard, profileReducer } from "entities/Profile";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components";
import { useAppDispatch } from "shared/lib/hooks/storeHooks";

const reducers: ReducersList = { profile: profileReducer };

interface IProfilePageProps {
    className?: string;
}

const ProfilePage: FC<IProfilePageProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData({ username: "dasd" }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <ProfileCard />
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
