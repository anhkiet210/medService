import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  InputNumber,
  Row,
  Select,
  Typography,
} from "antd";
import Layout from "../../layouts/Layout";
import styles from "./Appointment.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const listDoctors = [
  {
    id: 1,
    name: "doctor1",
  },
  {
    id: 2,
    name: "doctor2",
  },
  {
    id: 3,
    name: "doctor3",
  },
  {
    id: 4,
    name: "doctor4",
  },
];

const contentAppointment = [
  {
    id: 1,
    content: "Pediatrics Department",
  },
  {
    id: 2,
    content: "Neurology Department",
  },
  {
    id: 3,
    content: "Haematology Department",
  },
];

function Appointment() {
  const [form] = Form.useForm();

  const handleBooking = (value) => {
    console.log("value", value);
  };

  return (
    <>
      <Layout>
        <Row justify="center" style={{ marginBottom: "30px" }}>
          <Col span={18}>
            <Row>
              <Col xs={24} sm={24} md={24} lg={16}>
                <div className={cx("wrap-appointment")}>
                  <Typography.Title className={cx("title")}>
                    Book an Appointment
                  </Typography.Title>
                  <Typography.Paragraph className={cx("text")}>
                    Porta semper lacus cursus, feugiat primis ultrice in ligula
                    risus auctor tempus feugiat dolor lacinia cubilia curae
                    integer congue leo metus, primis in orci integer metus
                    mollis faucibus enim. Nemo ipsam egestas volute turpis
                    dolores ut aliquam quaerat sodales sapien undo pretium purus
                    feugiat dolor impedit magna purus pretium gravida donec
                    ligula massa gravida donec pretium
                  </Typography.Paragraph>
                  <Form onFinish={handleBooking} form={form}>
                    <Form.Item
                      name="doctorId"
                      rules={[
                        {
                          required: true,
                          message: "Please select doctor",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select doctor"
                        className={cx("form-input")}
                      >
                        {listDoctors.map((doctor) => (
                          <Select.Option value={doctor.id} key={doctor.id}>
                            {doctor.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="bookedAt"
                      rules={[
                        {
                          required: true,
                          message: "Please input booked at!",
                        },
                      ]}
                    >
                      <DatePicker
                        placeholder="Select appoint date"
                        className={cx("form-input")}
                      />
                    </Form.Item>
                    <Form.Item
                      name="bookedTime"
                      rules={[
                        {
                          required: true,
                          message: "Please input booked time",
                        },
                      ]}
                    >
                      <InputNumber
                        placeholder="Booked time"
                        className={cx("form-input")}
                      />
                    </Form.Item>
                    <Form.Item
                      name="content"
                      rules={[
                        {
                          required: true,
                          message: "Please select content",
                        },
                      ]}
                    >
                      <Select
                        placeholder="Select content"
                        className={cx("form-input")}
                        name="content"
                      >
                        {contentAppointment.map((content) => (
                          <Select.Option value={content.id} key={content.id}>
                            {content.content}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item>
                      <Button htmlType="submit" className={cx("btn-submit")}>
                        Request an Appointment
                      </Button>
                    </Form.Item>
                  </Form>
                  <Typography.Paragraph className={cx("text")}>
                    * Porta semper lacus cursus, feugiat primis ultrice in
                    ligula risus auctor tempus feugiat dolor lacinia cubilia
                    curae integer congue leo metus, primis in orci integer metus
                    mollis faucibus enim. Nemo ipsam egestas volute turpis
                    dolores ut aliquam quaerat sodales sapien undo pretium purus
                  </Typography.Paragraph>
                </div>
              </Col>
              <Col xs={24} sm={24} md={24} lg={8}>
                <div className={cx("wrap-info-doctor")}>
                  <Typography.Title className={cx("wrap-info-doctor__title")}>
                    The Heart Of Clinic
                  </Typography.Title>
                  <Divider />
                  <div className={cx("info-doctor")}>
                    <img
                      src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/07/head-of-clinic.jpg"
                      alt=""
                    />
                    <div className="">
                      <Typography.Title
                        level={2}
                        className={cx("info-doctor__name")}
                      >
                        Dr. Jonathan Barnes
                      </Typography.Title>
                      <Typography.Title
                        level={5}
                        className={cx("info-doctor__job")}
                      >
                        Chief Medical Officer
                      </Typography.Title>
                      <Typography.Title
                        level={2}
                        className={cx("info-doctor__phone")}
                      >
                        1-800-1234-567
                      </Typography.Title>
                    </div>
                  </div>
                  <Typography.Paragraph className={cx("text")}>
                    Aliquam orci nullam tempor sapien orci gravida donec enim
                    ipsum porta justo integer at velna vitae auctor integer
                    congue
                  </Typography.Paragraph>
                </div>
                <div className={cx("wrap-working-time")}>
                  <Typography.Title className={cx("working-title")}>
                    Working Time
                  </Typography.Title>
                  <Typography.Paragraph className={cx("text")}>
                    Porta semper lacus cursus, feugiat primis ultrice ligula
                    risus auctor at tempus feugiat dolor lacinia cursus nulla
                    vitae massa
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
                  <Typography.Title className={cx("working-title")}>
                    Need a personal health plan?
                  </Typography.Title>
                  <Typography.Paragraph className={cx("text")}>
                    Porta semper lacus cursus, and feugiat primis ultrice ligula
                    at risus
                  </Typography.Paragraph>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

export default Appointment;
