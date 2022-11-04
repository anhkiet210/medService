import { Col, Row, Menu, Button } from 'antd';
import Affix from 'antd/lib/affix';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import style from './MenuBar.module.css';

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
    {
        id: 4,
        name: 'Facemask Detection',
        link: '/facemask-detection',
    },
];

function MenuBar() {
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
                                <Link to="/appointment" className={cx('btn-appoitment')}>
                                    Make an Appointment
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Affix>
        </>
    );
}

export default MenuBar;
