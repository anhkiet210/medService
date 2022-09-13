import { Button, Col, List, Row, Space, Typography } from "antd";
import classNames from "classnames/bind";
import { FaAngleDoubleRight } from "react-icons/fa";
import styles from "../../Home.module.css";

const cx = classNames.bind(styles);

function ContentTab({ data3, data4, img, title }) {
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <div style={{ width: "100%" }}>
            <img src={img} alt="" style={{ width: "100%" }} />
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          xxl={12}
          style={{ padding: "50px" }}
        >
          <Typography.Title className={cx("title")}>{title}</Typography.Title>
          <Typography.Paragraph className={cx("text")}>
            An enim nullam tempor sapien gravida donec enim ipsum blandit justo
            integer velna vitae auctor integer congue magna pretium purus
            pretium ligula rutrum itae laoreet cubilia laoreetan augue lorem
            ipsum egestas vitae ligula vitae arcu blandit ultrice ligula egestas
            magna suscipit
          </Typography.Paragraph>
          <Space>
            <List
              split={false}
              dataSource={data3}
              renderItem={(item) => (
                <List.Item className={cx("text")}>
                  <Typography.Text>
                    <FaAngleDoubleRight
                      style={{ color: "#00a3c8", verticalAlign: "middle" }}
                    />
                  </Typography.Text>{" "}
                  {item}
                </List.Item>
              )}
            />
            <List
              split={false}
              dataSource={data4}
              renderItem={(item) => (
                <List.Item className={cx("text")}>
                  <Typography.Text>
                    <FaAngleDoubleRight
                      style={{ color: "#00a3c8", verticalAlign: "middle" }}
                    />
                  </Typography.Text>{" "}
                  {item}
                </List.Item>
              )}
            />
          </Space>
          <Button className={cx("btn-meet-all")}>View More Details</Button>
        </Col>
      </Row>
    </>
  );
}

export default ContentTab;
