import Banner from "../../components/Banner";
import Layout from "../../Layout";
import { Row, Col, Typography, Button } from 'antd'
import style from './Home.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(style)

function Home() {
    return (
        <>
            <Layout>
                <Banner />
                <Row justify='center'>
                    <Col span={18}>
                        <Row >
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className={cx('wrap-img')}>
                                <img src="https://jthemes.org/wp/medservices/wp-content/themes/medservice/images/image-03.png" alt="" />
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className={cx('wrap-text')}>
                                <Typography.Text className={cx('text-title')}>WELCOME TO MEDSERVICE</Typography.Text>
                                <Typography.Title className={cx('main-title')}>Complete Medical Solutions in One Place</Typography.Title>
                                <Typography.Paragraph className={cx('text-banner')}>
                                    Porta semper lacus cursus, feugiat primis ultrice in ligula risus lorem auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, eu mollislorem primis in orci integer metus mollis faucibus. An enim nullam tempor sapien gravida donec pretium and ipsum porta justo integer at velna vitae auctor integer congue
                                </Typography.Paragraph>
                                <Typography.Paragraph className={cx('text-banner')}>Randon Pexon, Head of Clinic</Typography.Paragraph>
                                <img src="https://jthemes.org/wp/medservices/wp-content/themes/medservice/images/signature.png" alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Layout>
        </>
    );
}

export default Home;