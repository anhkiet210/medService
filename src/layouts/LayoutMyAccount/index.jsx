import { Col, List, Row } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Layout from "../../layouts/Layout";

const data = [
  {
    id: 1,
    name: "Dashboard",
    path: "/my-account",
  },
  {
    id: 2,
    name: "Orders",
    path: "/my-account/orders",
  },
  {
    id: 3,
    name: "Account details",
    path: "/my-account/account-detail",
  },
];

function LayoutMyAccount({ children }) {
  const [idxTab, setIdxTab] = useState(1);

  const handleChangeTab = (idx) => {
    setIdxTab(idx);
  };

  const handleLogout = () => {
    console.log("logout");
  };

  console.log(idxTab);

  return (
    <>
      <Layout>
        <BreadCrumb title="My account" />
        <Row justify="center" style={{ padding: "30px 0" }}>
          <Col span={18}>
            <Row>
              <Col xs={24} sm={24} md={8} lg={8} style={{ padding: "30px" }}>
                <List
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item
                      key={item.id}
                      style={{
                        fontSize: "17px",
                        fontWeight: "300",
                        cursor: "pointer",
                      }}
                      
                    >
                      <Link
                        to={item.path}
                        style={{
                          color: `${idxTab === item.id ? "#00a3c8" : "#000"}`,
                        }}
                        onClick={() => handleChangeTab(item.id)}
                      >
                        {item.name}
                      </Link>
                    </List.Item>
                  )}
                />
                <ul
                  style={{
                    listStyle: "none",
                    fontSize: "17px",
                    fontWeight: "500",
                    marginTop: "50px",
                  }}
                >
                  <li style={{ cursor: "pointer" }} onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              </Col>
              <Col xs={24} sm={24} md={16} lg={16}>
                {children}
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default LayoutMyAccount;
