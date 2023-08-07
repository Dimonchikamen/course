import { StoryFn } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18nForStorybook from "shared/config/i18n/i18nForStorybook";

export const TranslationDecorator = (StoryComponent: () => ReturnType<StoryFn>) => {
    return (
        <I18nextProvider i18n={i18nForStorybook}>
            <StoryComponent />
        </I18nextProvider>
    );
};
