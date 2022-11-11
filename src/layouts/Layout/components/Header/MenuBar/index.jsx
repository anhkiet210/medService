import { Col, Row, Menu, Button, Space } from 'antd';
import Affix from 'antd/lib/affix';
import classNames from 'classnames/bind';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import style from './MenuBar.module.css';
import * as authService from '../../../../../services/authService';

const cx = classNames.bind(style);

const menu = [
    {
        id: 1,
        name: 'Home',
        link: '/',
    },
    {
        id: 2,
        name: 'My account',
        link: '/my-account',
    },
    {
        id: 3,
        name: 'Blog',
        link: '/blog',
    },
];

function MenuBar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('accessToken');
    const handleLogout = async () => {
        const res = await authService.logout();
        if (res && res.status === 'SUCCESS') {
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        console.log(res);
    };
    return (
        <>
            <Affix offsetTop={0}>
                <Row justify="center" style={{ backgroundColor: '#fff' }}>
                    <Col span={18}>
                        <Row className={cx('menu-bar')}>
                            <Col md={16}>
                                <Menu mode="horizontal" className={cx('menu')}>
                                    {menu.map((item) => (
                                        <Menu.Item className={cx('menu-item')} key={item.id}>
                                            <NavLink to={item.link}>{item.name}</NavLink>
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            </Col>
                            <Col md={8} className={cx('wrap-btn')}>
                                <Space>
                                    {token ? (
                                        <Link className={cx('btn-appoitment')} onClick={handleLogout}>
                                            Logout
                                        </Link>
                                    ) : (
                                        <Link to="/login" className={cx('btn-appoitment')}>
                                            Login
                                        </Link>
                                    )}
                                    <Link to="/appointment" className={cx('btn-appoitment')}>
                                        Make an Appointment
                                    </Link>
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Affix>
        </>
    );
}

export default MenuBar;
