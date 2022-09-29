import { useEffect, useState } from 'react';
import { Col, Row, Typography, Button, Space } from 'antd';
import classNames from 'classnames/bind';
import style from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTumblr } from 'react-icons/fa';
import logo from '../../../../img/logo.png';
import ScrollTotop from '../../../../components/ScrollToTop';

const cx = classNames.bind(style);

function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleSCrollTop = () => {
            if (window.scrollY >= 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleSCrollTop);

        return () => window.removeEventListener('scroll', handleSCrollTop);
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Row justify="center" className={cx('footer')}>
                <Col span={18} style={{ borderBottom: '1px solid #ccc', padding: '20px 0' }}>
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} style={{ padding: '10px' }}>
                            <img src={logo} alt="" className={cx('logo')} />
                            <Typography.Paragraph className={cx('text')}>
                                Aliquam orci nullam tempor sapien gravida donec an enim ipsum porta justo at velna
                                auctor congue
                            </Typography.Paragraph>
                            <Space>
                                <Button type="link" icon={<FaFacebookF />} className={cx('icon', 'facebook')} />
                                <Button type="link" icon={<FaTwitter />} className={cx('icon', 'twitter')} />
                                <Button type="link" icon={<FaLinkedinIn />} className={cx('icon', 'linked')} />
                                <Button type="link" icon={<FaTumblr />} className={cx('icon', 'tumblr')} />
                            </Space>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} style={{ padding: '10px' }}>
                            <Typography.Title className={cx('title')}>Our Location</Typography.Title>
                            <Typography.Paragraph className={cx('text')}>
                                121 King Street, Melbourne, Victoria 3000 Australia
                            </Typography.Paragraph>
                            <Typography.Paragraph className={cx('text')}>
                                E: <Typography.Link href="true">support@wpmedservice.com</Typography.Link>
                            </Typography.Paragraph>
                            <Typography.Paragraph className={cx('text')}>+12 9 8765 4321</Typography.Paragraph>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} style={{ padding: '10px' }}>
                            <Typography.Title className={cx('title')}>Working Time</Typography.Title>
                            <Space direction="vertical">
                                <Typography.Text className={cx('text')}>
                                    Mon - Wed - <span>9:00 AM - 7:00 PM</span>
                                </Typography.Text>
                                <Typography.Text className={cx('text')}>
                                    Thursday - <span>9:00 AM - 6:30 PM</span>
                                </Typography.Text>
                                <Typography.Text className={cx('text')}>
                                    Friday - <span>9:00 AM - 6:00 PM</span>
                                </Typography.Text>
                                <Typography.Text className={cx('text')}>
                                    Sat - Sun - <span>Closed</span>
                                </Typography.Text>
                            </Space>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} style={{ padding: '10px' }}>
                            <Typography.Title className={cx('title')}>Emergency Cases</Typography.Title>
                            <Typography.Title className={cx('title', 'sdt')}>1-800-123-4560</Typography.Title>
                            <Typography.Paragraph className={cx('text')}>
                                Aliquam orci nullam undo tempor sapien gravida donec enim ipsum porta justo velna aucto
                                magna
                            </Typography.Paragraph>
                        </Col>
                    </Row>
                </Col>
                <Col span={18} style={{ padding: '40px 0 0' }}>
                    <Typography.Paragraph className={cx('copy-right')}>
                        © 2019 Medservice. All Rights Reserved
                    </Typography.Paragraph>
                </Col>
            </Row>
        </>
    );
}

export default Footer;
