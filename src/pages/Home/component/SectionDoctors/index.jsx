import { Button, Col, Row, Space, Typography } from 'antd';
import { Link } from 'react-router-dom';
import styles from '../../Home.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SectionDoctors({ listDoctors }) {
    console.log('section', listDoctors[0]?.fullName);
    return (
        <>
            <Row justify="center">
                <Col
                    xs={22}
                    sm={22}
                    md={18}
                    style={{ textAlign: 'center', padding: '50px 0' }}
                    className={cx('wrap-list-card')}
                >
                    <Space direction="vertical">
                        <Typography.Title className={cx('main-title')}>Our Medical Specialists</Typography.Title>
                        <Typography.Paragraph className={cx('text')}>
                            Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero at tempus,
                            blandit posuere ligula varius
                        </Typography.Paragraph>
                    </Space>
                    <Row style={{ marginTop: '40px' }}>
                        {listDoctors &&
                            listDoctors?.map((doctor) => (
                                <Col
                                    xs={24}
                                    sm={24}
                                    md={12}
                                    lg={6}
                                    xl={6}
                                    xxl={6}
                                    style={{ padding: '10px' }}
                                    key={doctor?.id}
                                >
                                    <div className={cx('card')}>
                                        <div className={cx('card-img')}>
                                            <img src={doctor?.avatar} alt="" />
                                            <div className={cx('card-overlay')}>
                                                <Link to={`/info-doctor/${doctor?.id}`}>View More Info</Link>
                                            </div>
                                        </div>
                                        <Typography.Title className={cx('card-title')}>
                                            <Link to={`/info-doctor/${doctor?.id}`}>{doctor?.fullName}</Link>
                                        </Typography.Title>
                                        <Typography.Text className={cx('card-job')}>
                                            {doctor?.specialist}
                                        </Typography.Text>
                                    </div>
                                </Col>
                            ))}
                    </Row>
                    <Button className="btn-primary">
                        <Link to="/doctors">Meet All Doctors</Link>
                    </Button>
                </Col>
            </Row>
        </>
    );
}

export default SectionDoctors;
