import { Col, Row } from "antd";
import { useState } from "react";
import ComponentModal from "../../components/ModalAuth";

function Login() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Row justify="center">
                <Col span={18}>
                    <ComponentModal isModalOpen={isModalOpen} onCloseModal={onCloseModal} />
                </Col>
            </Row>
        </>
    );
}

export default Login;
