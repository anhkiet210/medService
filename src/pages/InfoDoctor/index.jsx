import { Button, Col, Divider, Image, List, Row, Space, Typography } from "antd";
import style from "./infoDoctor.module.css";
import classNames from "classnames/bind";
import BreadCrumb from "../../components/BreadCrumb";
import Layout from "../../layouts/Layout";
import { FaMobileAlt, FaEnvelope, FaAngleDoubleRight } from "react-icons/fa";

const cx = classNames.bind(style);

function InfoDoctor() {
  const data = [
    "Nemo ipsam egestas volute and turpis dolores quaerat",
    "Magna luctus tempor augue vitae laoreet augue in cubilia risus auctor tempus dolor felis lacinia risus auctor id viverra dolor",
    "Ligula risus auctor tempus dolor feugiat felis lacinia risus interdum auctor id viverra dolor iaculis luctus",
    "An enim nullam tempor at pretium purus blandit",
  ];
  return (
    <>
      <Layout>
        <BreadCrumb title="Jonathan Barnes D.M." />
        <Row justify="center">
          <Col span={18}>
            <Row>
              <Col md={12} style={{ padding: "30px" }}>
                <Image
                  src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/07/doctor-1-700x700.jpg"
                  width={"100%"}
                />
                <table>
                  <tr>
                    <th>Degrees</th>
                    <td>M.D. of Medicine</td>
                  </tr>
                  <tr>
                    <th>Areas of Expertise</th>
                    <td>Neurology Immunology Internal Medicine</td>
                  </tr>
                  <tr>
                    <th>Language(s)</th>
                    <td>English / Spanish / German</td>
                  </tr>
                  <tr>
                    <th>Work Days</th>
                    <td>Tuesday – Thursday</td>
                  </tr>
                </table>
                <Space direction="vertical" className={cx("info-contact")}>
                  <Typography.Text className={cx("title")}>
                    {" "}
                    <FaMobileAlt style={{ marginRight: "5px" }} />
                    1-(800)-569-7890
                  </Typography.Text>
                  <Typography.Text className={cx("title")}>
                    {" "}
                    <FaEnvelope style={{ marginRight: "5px" }} />
                    hello@yourdomain.com
                  </Typography.Text>
                </Space>
                <Space direction="vertical" className={cx("info-contact")}>
                  <Button className={cx("btn-book")}>
                    Book an Appointment
                  </Button>
                  <Button className={cx("btn-view")}>View Timetable</Button>
                </Space>
              </Col>
              <Col md={12} style={{ padding: "30px" }}>
                <Typography.Paragraph className={cx("text")}>
                  Etiam sapien sem magna at vitae pulvinar congue augue egestas
                  pretium neque id viverra suscipit egestas magna porta ratione,
                  mollis risus lectus porta rutrum arcu aenean primis in augue
                  luctus neque purus ipsum neque dolor primis suscipit in magna
                  dignissim, porttitor hendrerit diam
                </Typography.Paragraph>
                <Typography.Paragraph className={cx("text")}>
                  In at mauris vel nisl convallis porta at vitae dui. Nam lacus
                  ligula, vulputate molestie bibendum quis, aliquet elementum
                  massa. Vestibulum ut sagittis odio. Ac massa lorem. Fusce eu
                  cursus est. Fusce non nulla vitae massa placerat vulputate vel
                  a purus. Aliqum mullam blandit tempor sapien
                </Typography.Paragraph>
                <Typography.Title className={cx('text-tile')}>Education + Trainings</Typography.Title>
                <Divider />
                <Typography.Paragraph className={cx("text")}>
                  Aliqum mullam blandit tempor sapien gravida donec ipsum, at
                  porta justo. Velna vitae auctor congue magna nihil impedit
                  ligula risus. Mauris donec ociis et magnis sapien etiam sapien
                  sem sagittis congue tempor gravida
                </Typography.Paragraph>
                <List
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <Typography.Text className={cx("text")}>
                        <FaAngleDoubleRight />
                      </Typography.Text>{" "}
                      {item}
                    </List.Item>
                  )}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default InfoDoctor;
