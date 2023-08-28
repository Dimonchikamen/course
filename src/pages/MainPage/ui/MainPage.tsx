import { Counter } from "entities/Counter";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui";
import { Text } from "shared/ui/Text/Text";

const MainPage: FC = () => {
    const { t } = useTranslation();
    const a =
        "lorem ipsum santa stefano kill met fuck you baby and touch me tra la la by ding ding don. One thing, i don't know why. Не знаю почему, я подолжаю лгать, но объясняя почему, я вырываю кровь - я так освобождааааююююсь! Я АААСВААААБАЖДАААЮЮЮ СЕБЯ";
    const [value, setVal] = useState(a);

    return (
        <div>
            {t("Главная страница")}
            <div>
                <Counter />
                <Input
                    value={value}
                    onChange={e => setVal(e.target.value)}
                />
                <Text
                    title={"title"}
                    text={value}
                />
            </div>
        </div>
    );
};

export default MainPage;
