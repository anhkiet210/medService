import Banner from "../../components/Banner";
import Layout from "../../Layout";
import { Row, Col, Typography, List, Button, Space } from "antd";
import style from "./Home.module.css";
import classNames from "classnames/bind";
import img04 from "../../img/image-04.png";
import { FaAngleDoubleRight, FaDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function Home() {
  const data = [
    "Magna luctus tempor enim nullam tempor blandit a vitae suscipit nemo ipsam egestas volute turpis dolores",
    "Nemo ipsam egestas volute turpis dolores magna luctus tempor suscipit mollis enim nullam tempor",
    "Magna luctus tempor blandit a vitae suscipit an enim..",
  ];

  const data2 = [
    "Maecenas gravida porttitor nuncquis vehicula magna luctus tempor. Quisque vel laoreet turpis urna augue viverra a augue eget dictum tempor diam pulvinar massa purus nulla",
    "Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit",
    "Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit magna purus pretium gravida donec ligula massa in faucibus",
  ];
  return (
    <>
      <Layout>
        <Banner />
        <Row justify="center">
          <Col span={18}>
            <Row>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                xxl={12}
                className={cx("wrap-img")}
              >
                <img
                  src="https://jthemes.org/wp/medservices/wp-content/themes/medservice/images/image-03.png"
                  alt=""
                />
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                xxl={12}
                className={cx("wrap-text")}
              >
                <Typography.Text className={cx("text-title")}>
                  WELCOME TO MEDSERVICE
                </Typography.Text>
                <Typography.Title className={cx("main-title")}>
                  Complete Medical Solutions in One Place
                </Typography.Title>
                <Typography.Paragraph className={cx("text")}>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus lorem auctor tempus feugiat dolor lacinia cubilia curae
                  integer congue leo metus, eu mollislorem primis in orci
                  integer metus mollis faucibus. An enim nullam tempor sapien
                  gravida donec pretium and ipsum porta justo integer at velna
                  vitae auctor integer congue
                </Typography.Paragraph>
                <Typography.Paragraph className={cx("text")}>
                  Randon Pexon, Head of Clinic
                </Typography.Paragraph>
                <img
                  src="https://jthemes.org/wp/medservices/wp-content/themes/medservice/images/signature.png"
                  alt=""
                  className={cx("img-signature")}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={18}>
            <Row>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                xxl={12}
                className={cx("wrap-text")}
              >
                <Typography.Text className={cx("text-title")}>
                  BEST PRACTICES
                </Typography.Text>
                <Typography.Title className={cx("main-title")}>
                  Clinic with Innovative Approach to Treatment
                </Typography.Title>
                <Typography.Paragraph className={cx("text")}>
                  An enim nullam tempor sapien gravida donec enim ipsum blandit
                  lorem porta justo integer in odio velna vitae auctor integer
                  congue magna at pretium purus pretium ligula rutrum itae
                  laoreet augue posuere and curae integer congue leo metus
                  mollis primis
                </Typography.Paragraph>
                <Typography.Text className={cx("title")}>
                  Highest Quality Care
                </Typography.Text>
                <List
                  split={false}
                  dataSource={data}
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
              </Col>
              <Col
                xs={24}
                sm={24}
                md={24}
                lg={12}
                xl={12}
                xxl={12}
                className={cx("wrap-img")}
              >
                <img
                  src={img04}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={24}>
            <Row>
              <Col
                xs={{
                  span: 24,
                  //   order: 2,
                }}
                sm={{
                  span: 24,
                  //   order: 2,
                }}
                md={{
                  span: 24,
                  //   order: 2,
                }}
                lg={12}
                xl={12}
                xxl={12}
                className={cx("wrap-img")}
                push
              >
                <div className={cx("img-bg")}></div>
              </Col>
              <Col
                xs={{
                  span: 24,
                  //   order: 1,
                }}
                sm={{
                  span: 24,
                  //   order: 1,
                }}
                md={{
                  span: 24,
                  //   order: 1,
                }}
                lg={12}
                xl={12}
                xxl={12}
                className={cx("wrap-text", "bg-blue")}
              >
                <Typography.Text className={cx("text-title")}>
                  QUALIFIED DOCTORS
                </Typography.Text>
                <Typography.Title className={cx("main-title")}>
                  Group of Certified and Experienced Doctors
                </Typography.Title>
                <List
                  split={false}
                  dataSource={data2}
                  renderItem={(item) => (
                    <List.Item className={cx("text")}>
                      <Typography.Text>
                        <FaDotCircle
                          style={{ color: "#fff", verticalAlign: "middle" }}
                        />
                      </Typography.Text>{" "}
                      {item}
                    </List.Item>
                  )}
                />
                <Button className={cx("btn-meet")}>Meet The Doctors</Button>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={18} style={{ textAlign: "center", padding: "50px 0" }}>
                <Space direction="vertical">
                  <Typography.Title className={cx("main-title")}>
                    Our Medical Specialists
                  </Typography.Title>
                  <Typography.Paragraph className={cx("text")}>
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero at tempus, blandit posuere ligula varius
                  </Typography.Paragraph>
                </Space>
                <Row style={{ marginTop: "40px" }}>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={6}
                    xl={6}
                    xxl={6}
                    style={{ padding: "10px" }}
                  >
                    <div className={cx("card")}>
                      <div className={cx('card-img')}>
                        <img
                          src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/07/doctor-1.jpg"
                          alt=""
                        />
                        <div className={cx('card-overlay')}>
                            <Button>View More Info</Button>
                        </div>
                      </div>
                      <Typography.Title className={cx('card-title')}>
                        <Link to="/">Jonathan Barnes D.M.</Link>
                      </Typography.Title>
                      <Typography.Text className={cx('card-job')}>Chief Medical Officer</Typography.Text>
                    </div>
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={6}
                    xl={6}
                    xxl={6}
                    style={{ padding: "10px" }}
                  >
                    <div className={cx("card")}>
                      <div className={cx('card-img')}>
                        <img
                          src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/07/doctor-1.jpg"
                          alt=""
                        />
                        <div className={cx('card-overlay')}>
                            <Button>View More Info</Button>
                        </div>
                      </div>
                      <Typography.Title className={cx('card-title')}>
                        <Link to="/">Jonathan Barnes D.M.</Link>
                      </Typography.Title>
                      <Typography.Text className={cx('card-job')}>Chief Medical Officer</Typography.Text>
                    </div>
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={6}
                    xl={6}
                    xxl={6}
                    style={{ padding: "10px" }}
                  >
                    <div className={cx("card")}>
                      <div className={cx('card-img')}>
                        <img
                          src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/07/doctor-1.jpg"
                          alt=""
                        />
                        <div className={cx('card-overlay')}>
                            <Button>View More Info</Button>
                        </div>
                      </div>
                      <Typography.Title className={cx('card-title')}>
                        <Link to="/">Jonathan Barnes D.M.</Link>
                      </Typography.Title>
                      <Typography.Text className={cx('card-job')}>Chief Medical Officer</Typography.Text>
                    </div>
                  </Col>
                  <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={6}
                    xl={6}
                    xxl={6}
                    style={{ padding: "10px" }}
                  >
                    <div className={cx("card")}>
                      <div className={cx('card-img')}>
                        <img
                          src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/07/doctor-1.jpg"
                          alt=""
                        />
                        <div className={cx('card-overlay')}>
                            <Button>View More Info</Button>
                        </div>
                      </div>
                      <Typography.Title className={cx('card-title')}>
                        <Link to="/">Jonathan Barnes D.M.</Link>
                      </Typography.Title>
                      <Typography.Text className={cx('card-job')}>Chief Medical Officer</Typography.Text>
                    </div>
                  </Col>
                </Row>
                <Button className={cx('btn-meet-all')}>Meet All Doctors</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Home;
