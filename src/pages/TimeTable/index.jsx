import { Button, Col, Modal, Row } from "antd";
import { useState } from "react";

function TimeTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Row justify="center">
        <Col span={18}>
          <Button type="primary" onClick={showModal}>
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </Col>
      </Row>
    </>
  );
}

export default TimeTable;
