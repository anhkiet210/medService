import { Col, Row } from "antd";
import style from "./BreadCrumb.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function BreadCrumb({title}) {
  return (
    <>
      <Row style={{ backgroundColor: "#e5e5e5" }} justify="center">
        <Col span={18}>
          <div className={cx("bread-crumb")}>
            <h4 className={cx("title-page")}>{title}</h4>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default BreadCrumb;
