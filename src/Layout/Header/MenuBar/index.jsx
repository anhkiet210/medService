import { Col, Row, Menu, Button } from "antd";
import Affix from "antd/lib/affix";
import classNames from "classnames/bind";
import style from './MenuBar.module.css'

const cx = classNames.bind(style)

function MenuBar() {
    return (
        <>
            <Affix offsetTop={0}>
                <Row justify="center" style={{backgroundColor: '#fff'}}>
                    <Col span={18}>
                        <Row className={cx('menu-bar')}>
                            <Col md={16}>
                                <Menu mode="horizontal" className={cx('menu')}>
                                    <Menu.Item key="mail" className={cx('menu-item')}>
                                        Navigation One
                                    </Menu.Item>
                                    <Menu.SubMenu key="SubMenu" title="Navigation Two - Submenu" className={cx('menu-item')}>
                                        <Menu.Item key="two" className={cx('menu-item')} >
                                            Navigation Two
                                        </Menu.Item>
                                        <Menu.Item key="three" className={cx('menu-item')} >
                                            Navigation Three
                                        </Menu.Item>
                                    </Menu.SubMenu>
                                </Menu>
                            </Col>
                            <Col md={8} className={cx('wrap-btn')} >
                                <Button className={cx('btn-appoitment')}>Make an Appointment</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Affix>
        </>
    );
}

export default MenuBar;