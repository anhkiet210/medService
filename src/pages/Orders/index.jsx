import { Row, Typography } from "antd";
import LayoutMyAccount from "../../layouts/LayoutMyAccount";

function Orders() {
  return (
    <>
      <LayoutMyAccount>
        <Row style={{ padding: "30px" }}>
          <Typography.Text>No orders</Typography.Text>
        </Row>
      </LayoutMyAccount>
    </>
  );
}

export default Orders;
