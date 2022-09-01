import React from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd'
import classNames from 'classnames/bind'
import style from './Banner.module.css'
import { FaPhone } from 'react-icons/fa'

const cx = classNames.bind(style)

function Banner() {
    return (
        <>
            <Row justify='center' style={{ backgroundImage: 'linear-gradient(#b3d9ee, #fff)', position: 'relative' }}>
                <Col span={18}>
                    <Row className={cx('top-banner')}>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className={cx('wrap-text')}>
                            <Typography.Text className={cx('text-title')}>WELCOME TO OUR CLINIC</Typography.Text>
                            <Typography.Title className={cx('main-title')}>TAKE CARE OF YOUR HEALTH</Typography.Title>
                            <Typography.Paragraph className={cx('text-banner')}>
                                Feugiat primis ligula risus auctor egestas augue mauri lorem viverratortor in iaculis placerat eugiat mauris ipsum in viverra tortor and gravida purus pretium lorem primis in orci integer
                            </Typography.Paragraph>
                            <Button className={cx('btn-banner')}>More About Clinic</Button>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12} className={cx('wrap-img')}>
                            <img src="https://jthemes.org/wp/medservices/wp-content/themes/medservice/images/hero-1-img.png" alt="" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row justify='center' className={cx('wrap-info-table')}>
                <Col span={18}>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className={cx('info-table-item', 'working-time')}>
                            <Typography.Title className={cx('title')}>Working Time</Typography.Title>
                            <p className={cx('text')}>
                                Mon – Wed	<span>-	9:00 AM – 7:00 PM</span>
                            </p>
                            <Divider dashed style={{ margin: '12px 0' }} />
                            <p className={cx('text')}>
                                Thursday	<span>-	9:00 AM – 6:30 PM</span>
                            </p>
                            <Divider dashed style={{ margin: '12px 0' }} />
                            <p className={cx('text')}>
                                Friday	<span>-	9:00 AM – 6:00 PM</span>
                            </p>
                            <Divider dashed style={{ margin: '12px 0' }} />
                            <p className={cx('text')}>
                                Sun – Sun	<span>-	CLOSED</span>
                            </p>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className={cx('info-table-item', 'doctor-timetable')}>
                            <Typography.Title className={cx('title')}>Doctors Timetable</Typography.Title>
                            <Typography.Paragraph className={cx('text')}>
                                An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum
                            </Typography.Paragraph>
                            <Button className={cx('info-table-btn')}>
                                View Timetable
                            </Button>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className={cx('info-table-item', 'appointment')}>
                            <Typography.Title className={cx('title')}>Appointments</Typography.Title>
                            <Typography.Paragraph className={cx('text')}>
                                An magnis nulla dolor at sapien augue erat iaculis purus tempor magna ipsum and vitae a purus primis ipsum magna ipsum
                            </Typography.Paragraph>
                            <Button className={cx('info-table-btn')}>
                                Make an Appointment
                            </Button>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} className={cx('info-table-item', 'emergency')}>
                            <Typography.Title className={cx('title')}>Emergency Cases</Typography.Title>
                            <Typography.Title className={cx('title', 'sdt')}>
                                <FaPhone style={{marginRight: '10px'}}/>
                                1-800-123-4560
                            </Typography.Title>
                            <Typography.Paragraph className={cx('text')}>
                                An magnis nulla dolor at sapien augue erat aculis purus tempor magna ipsum vitae a purus primis ipsum magna ipsum tempus feugiat dolor impedit felis
                            </Typography.Paragraph>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default Banner;