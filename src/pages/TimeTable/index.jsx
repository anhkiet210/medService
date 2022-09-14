import { Col, Row } from "antd";
import { useState } from "react";
import ComponentModal from "../../components/ModalAuth";


function TimeTable() {
  const [isModalOpen, setIsModalOpen] = useState(true);


  const showModal = () => {
    setIsModalOpen(true);
  };


  return (
    <>
      <Row justify="center">
        <Col span={18}>
          <ComponentModal isModalOpen={isModalOpen}/>
        </Col>
      </Row>
    </>
  );
}

export default TimeTable;
