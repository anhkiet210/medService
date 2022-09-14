import { Button, Form, Input, Row, Typography } from "antd";
import classNames from "classnames/bind";
import LayoutMyAccount from "../../layouts/LayoutMyAccount";
import styles from "./AccountDetail.module.css";

const cx = classNames.bind(styles);

function AccountDetail() {
  return (
    <>
      <LayoutMyAccount>
        <Row style={{ padding: "30px" }}>
          <Form style={{ width: "100%" }} layout="vertical">
            <Form.Item
              label="Full Name"
              name="FullName"
              rules={[
                {
                  required: true,
                  message: "Please input your Full name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email address!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Typography.Title>Password change</Typography.Title>

            <Form.Item
              label="Current password (leave blank to leave unchanged)"
              name="currentPassword"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your password!",
              //   },
              // ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="New password (leave blank to leave unchanged)"
              name="newPassword"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your password!",
              //   },
              // ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Confirm new password"
              name="comfirmPassword"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your password!",
              //   },
              // ]}
            >
              <Input.Password />
            </Form.Item>

            <Button htmlType="submit" className={cx("btn-save-changes")}>
              Save changes
            </Button>
          </Form>
        </Row>
      </LayoutMyAccount>
    </>
  );
}

export default AccountDetail;
