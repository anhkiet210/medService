import { Col, Row, Space, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import classNames from 'classnames/bind';
import style from './TopHeader.module.css';
import { FaRegHospital, FaRegClock } from 'react-icons/fa';
import logo from '../../../../../img/logo.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function TopHeader() {
    return (
        <>
            <Row justify="center" style={{ borderBottom: '1px solid #ccc' }}>
                <Col span={18}>
                    <Row className={cx('top-header')}>
                        <Col md={12}>
                            <div className={cx('logo')}>
                                <Link to="/">
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>
                        </Col>
                        <Col md={12}>
                            <Row>
                                <Col md={12}>
                                    <Space>
                                        <Avatar shape="square" icon={<FaRegHospital />} className={cx('icon')} />
                                        <div>
                                            <Typography.Text>121 King Street, Melbourne,</Typography.Text>
                                            <Typography.Text>Victoria 3000 Australia</Typography.Text>
                                        </div>
                                    </Space>
                                </Col>
                                <Col md={12}>
                                    <Space>
                                        <Avatar shape="square" icon={<FaRegClock />} className={cx('icon')} />
                                        <div>
                                            <Typography.Text>121 King Street, Melbourne,</Typography.Text>
                                            <Typography.Text>Victoria 3000 Australia</Typography.Text>
                                        </div>
                                    </Space>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}

export default TopHeader;
