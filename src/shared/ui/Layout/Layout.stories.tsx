import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Row } from "./Row";
import { Col } from "./Col";

import s from "./Layout.stories.module.scss";

const Example: FC = () => {
    return (
        <div className={s.container}>
            <Row>
                <Col
                    className={s.el}
                    size={2}
                >
                    col 2
                </Col>
                <Col
                    className={s.el}
                    size={3}
                >
                    col 3
                </Col>
                <Col className={s.el}>col auto</Col>
            </Row>
            <Row>
                <Col className={s.el}>col auto</Col>
                <Col className={s.el}>col auto</Col>
                <Col className={s.el}>col auto</Col>
                <Col className={s.el}>col auto</Col>
            </Row>
            <Row>
                <Col className={s.el}> col auto</Col>
                <Col
                    className={s.el}
                    size={3}
                >
                    {" "}
                    col 3
                </Col>
            </Row>
            <Row>
                <Col
                    size={4}
                    className={s.colored}
                >
                    <Row className={s.row}>
                        <Col className={s.el}>COL 4</Col>
                    </Row>
                    <Row className={s.row}>
                        <Col className={s.el}>col auto</Col>
                        <Col className={s.el}>col auto</Col>
                    </Row>
                </Col>
                <Col size={6}>
                    <Row className={s.row}>
                        <Col className={s.el}>COL 6</Col>
                    </Row>
                    <Row className={s.row}>
                        <Col
                            className={s.el}
                            size={4}
                        >
                            col 4
                        </Col>
                        <Col
                            className={s.el}
                            size={6}
                        >
                            col 6
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

const meta = {
    title: "Layout/Layout",
    component: Example,
    tags: ["autodocs"],
    parameters: {
        docs: {
            source: {
                code: Example,
                language: "tsx",
                type: "code",
            },
        },
    },
} satisfies Meta<typeof Example>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Layout: Story = {};
