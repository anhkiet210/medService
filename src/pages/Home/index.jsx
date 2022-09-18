import { Button, Col, List, Row, Space, Typography } from "antd";
import classNames from "classnames/bind";
import { useState } from "react";
import { FaAngleDoubleRight, FaDotCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import blood from "../../img/blood.png";
import hematology from "../../img/hematology_700x700.jpg";
import img04 from "../../img/image-04.png";
import lungs from "../../img/lungs.png";
import mri from "../../img/mri.png";
import mri2 from "../../img/mri_700x700.jpg";
import pediatrics from "../../img/pediatrics_700x700.jpg";
import stethoscope from "../../img/stethoscope.png";
import xRay from "../../img/x-ray_700x700.jpg";
import Layout from "../../layouts/Layout";
import ContentTab from "./component/ContentTab";
import style from "./Home.module.css";

const cx = classNames.bind(style);

const listTab = [
  {
    id: 1,
    icon: stethoscope,
    name: "Pediatrics",
  },
  {
    id: 2,
    icon: blood,
    name: "Hematology",
  },
  {
    id: 3,
    icon: mri,
    name: "MRI",
  },
  {
    id: 4,
    icon: lungs,
    name: "X-Ray Diagnostics",
  },
];

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

const data3 = [
  "Kurpis dolor egestas values",
  "Magna luctus tempor suscipit mollis",
  "Magna luctus tempor blandit a vitae suscipit",
];

const data4 = [
  "Nemo ipsam egestas volute turpis dolores",
  "Magna luctus tempor blandit a vitae suscipit",
  "An enim nullam tempor",
];

function Home() {
  const [idxTab, setIdxTab] = useState(1);

  const handleIdxTab = (id) => {
    setIdxTab(id);
  };

  return (
    <>
      <Layout>
        <Banner />
        <Row justify="center">
          <Col xs={22} sm={22} md={18}>
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
          <Col xs={22} sm={22} md={18}>
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
          </Col>
        </Row>

        <Row justify="center">
          <Col
            xs={22}
            sm={22}
            md={18}
            style={{ textAlign: "center", padding: "50px 0" }}
            className={cx("wrap-list-card")}
          >
            <Space direction="vertical">
              <Typography.Title className={cx("main-title")}>
                Our Medical Specialists
              </Typography.Title>
              <Typography.Paragraph className={cx("text")}>
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero at tempus, blandit posuere ligula varius
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
                  <div className={cx("card-img")}>
                    <img
                      src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/07/doctor-1.jpg"
                      alt=""
                    />
                    <div className={cx("card-overlay")}>
                      <Button>View More Info</Button>
                    </div>
                  </div>
                  <Typography.Title className={cx("card-title")}>
                    <Link to="/">Jonathan Barnes D.M.</Link>
                  </Typography.Title>
                  <Typography.Text className={cx("card-job")}>
                    Chief Medical Officer
                  </Typography.Text>
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
                  <div className={cx("card-img")}>
                    <img
                      src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/07/doctor-1.jpg"
                      alt=""
                    />
                    <div className={cx("card-overlay")}>
                      <Button>View More Info</Button>
                    </div>
                  </div>
                  <Typography.Title className={cx("card-title")}>
                    <Link to="/">Jonathan Barnes D.M.</Link>
                  </Typography.Title>
                  <Typography.Text className={cx("card-job")}>
                    Chief Medical Officer
                  </Typography.Text>
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
                  <div className={cx("card-img")}>
                    <img
                      src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/07/doctor-1.jpg"
                      alt=""
                    />
                    <div className={cx("card-overlay")}>
                      <Button>View More Info</Button>
                    </div>
                  </div>
                  <Typography.Title className={cx("card-title")}>
                    <Link to="/">Jonathan Barnes D.M.</Link>
                  </Typography.Title>
                  <Typography.Text className={cx("card-job")}>
                    Chief Medical Officer
                  </Typography.Text>
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
                  <div className={cx("card-img")}>
                    <img
                      src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/07/doctor-1.jpg"
                      alt=""
                    />
                    <div className={cx("card-overlay")}>
                      <Button>View More Info</Button>
                    </div>
                  </div>
                  <Typography.Title className={cx("card-title")}>
                    <Link to="/">Jonathan Barnes D.M.</Link>
                  </Typography.Title>
                  <Typography.Text className={cx("card-job")}>
                    Chief Medical Officer
                  </Typography.Text>
                </div>
              </Col>
            </Row>
            <Button className={cx("btn-meet-all")}>Meet All Doctors</Button>
          </Col>
        </Row>

        <Row justify="center">
          <Col span={24} className={cx("img-bg-2")}>
            <Row justify="center">
              <Col
                xs={{ span: 24, justify: "center" }}
                sm={{ span: 24, justify: "center" }}
                md={{ span: 18, justify: "center" }}
              >
                <div className={cx("wrap-table-time")}>
                  <div className={cx("table-time")}>
                    <Typography.Title className={cx("big-title")}>
                      Opening Hours :
                    </Typography.Title>
                    <Typography.Paragraph className={cx("text")}>
                      Porta semper lacus cursus, feugiat primis ultrice ligula
                      risus auctor tempus feugiat dolor lacinia cursus vitae
                      massa
                    </Typography.Paragraph>
                    <table>
                      <tbody>
                        <tr>
                          <td>MON – WED</td>
                          <td> - </td>
                          <td>9:00 AM - 7:00 PM</td>
                        </tr>
                        <tr>
                          <td>THURSDAY</td>
                          <td> - </td>
                          <td>9:00 AM - 6:30 PM</td>
                        </tr>
                        <tr>
                          <td>FRIDAY</td>
                          <td> - </td>
                          <td>9:00 AM - 6:00 PM</td>
                        </tr>
                        <tr>
                          <td>SUN - SUN</td>
                          <td> - </td>
                          <td>CLOSED</td>
                        </tr>
                      </tbody>
                    </table>
                    <Typography.Title className={cx("small-title")}>
                      Need a personal health plan?
                    </Typography.Title>
                    <Typography.Paragraph className={cx("text")}>
                      Porta semper lacus cursus, feugiat primis ultrice lorem
                      ligula risus auctor tempus feugiat dolor at lacinia undo
                      cursus nulla massa suscipit, luctus neque purus ipsum
                      neque dolor primis
                    </Typography.Paragraph>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row justify="center">
          <Col xs={22} sm={22} md={18} style={{ padding: "80px 0" }}>
            <ul className={cx("list-tab")}>
              {listTab.map((item) => (
                <li
                  key={item.id}
                  className={cx(
                    "tab-item",
                    `${item.id === idxTab ? "active-tab" : ""}`
                  )}
                  onClick={() => handleIdxTab(item.id)}
                >
                  <img src={item.icon} alt="" />
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>

            {idxTab === 1 && (
              <ContentTab
                data3={data3}
                data4={data4}
                img={pediatrics}
                title="Pediatrics"
              />
            )}
            {idxTab === 2 && (
              <ContentTab
                data3={data3}
                data4={data4}
                img={hematology}
                title="Hematology"
              />
            )}
            {idxTab === 3 && (
              <ContentTab
                data3={data3}
                data4={data4}
                img={mri2}
                title="MRI Diagnostic"
              />
            )}
            {idxTab === 4 && (
              <ContentTab
                data3={data3}
                data4={data4}
                img={xRay}
                title="X-Ray Diagnostic"
              />
            )}
          </Col>
        </Row>

        <Row className={cx("banner")} justify="center">
          <Col span={18}>
            <div className={cx("wrap-text-banner")}>
              <Typography.Title
                className={cx("title")}
                style={{ color: "#fff !important" }}
              >
                Highest Quality Medical Treatment
              </Typography.Title>
              <Typography.Paragraph className={cx("text", "bg")}>
                Egestas magna egestas magna ipsum vitae purus ipsum primis
                cubilia lorem laoreet augue egestas suscipit lectus mauris a
                lectus laoreet gestas neque undo luctus feugiat augue suscipit
              </Typography.Paragraph>
              <Button className={cx("btn-meet-all")}>Free Consultation</Button>
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Home;
