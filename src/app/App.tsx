import { userActions } from "entities/User";
import { FC, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppRouter } from "app/providers/router";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar";
import { Container } from "shared/ui";

import { classNames } from "shared/lib/classNames/classNames";
import s from "./App.module.scss";

const App: FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.checkAuth());
    }, [dispatch]);

    return (
        <div className={classNames("app")}>
            <Suspense fallback="">
                <div className={s.page_wrap}>
                    <Sidebar />
                    <div className={s.wrap_content}>
                        <Header />
                        <Container
                            className={s.page_content}
                            fluid={false}
                        >
                            <AppRouter />
                        </Container>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default App;
