import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Form, Input, InputNumber, message, Modal, Radio, Space, Typography } from 'antd';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { FaAsterisk, FaCalendarAlt, FaSlack } from 'react-icons/fa';
import styles from './ModalAuth.module.css';
import * as authService from '../../services/authService';
import * as validateMessages from '../../utils/message';
import { useNavigate } from 'react-router-dom';
import { setToken } from '../../utils/jwt';

const cx = classNames.bind(styles);

function ModalAuth({ isModalOpen, onCloseModal }) {
    const [isNewCustomer, setIsNewCustomer] = useState(1);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [loadingReg, setLoadingReg] = useState(false);

    const onChange = (e) => {
        setIsNewCustomer(e.target.value);
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handleRegister = async (value) => {
        try {
            setLoadingReg(true);
            const res = await authService.register(value);
            setLoadingReg(false);
            if (res.status === 'SUCCESS') {
                message.success('Register success!');
                setIsNewCustomer(2);
            }

            if (res.status === 'FAILED') {
                message.error(res.message);
            }
        } catch (error) {
            console.log(error);
            setLoadingReg(false);
        }
        // console.log(res);
    };

    const handleLogin = async (value) => {
        const formatValue = JSON.stringify(value);
        console.log(formatValue);
        setLoading(true);
        const res = await authService.login(value);
        setLoading(false);
        if (res && res.status === 'SUCCESS') {
            localStorage.setItem('accessToken', res.data.accessToken);
            setToken(res.data.accessToken);
            onCloseModal();
            navigate('/');
        }

        if (res && res.status === 'FAILED' && res.data) {
            message.warn('You are logged in');
            onCloseModal();
            navigate('/my-account');
        }

        console.log(res);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const logout = async () => {
        const res = await authService.logout();
        if (res && res.status === 'SUCCESS') {
            localStorage.removeItem('accessToken');
        }
        console.log(res);
    };

    return (
        <>
            <Modal
                title="REGISTER OR LOGIN"
                visible={isModalOpen}
                footer={null}
                bodyStyle={{ maxHeight: '70vh', overflowY: 'scroll' }}
                onCancel={handleCancel}
            >
                <Radio.Group
                    onChange={onChange}
                    value={isNewCustomer}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '0 0 24px',
                        borderBottom: '1px solid #ccc',
                    }}
                >
                    <Radio value={1}>New customer</Radio>
                    <Radio value={2}>Current customer</Radio>
                </Radio.Group>
                {isNewCustomer === 1 && (
                    <div className={cx('wrap-register-form')}>
                        <Form
                            form={form}
                            onFinish={handleRegister}
                            onFinishFailed={onFinishFailed}
                            validateMessages={validateMessages.validateMessages()}
                        >
                            <Typography.Title level={3} className={cx('form-title')}>
                                Registration:{' '}
                                <Typography.Text>
                                    <FaAsterisk className={cx('icon')} />
                                </Typography.Text>
                            </Typography.Title>
                            <Typography.Paragraph className={cx('text')}>
                                Please enter your name, your email address and choose a password to get started.
                            </Typography.Paragraph>
                            <Form.Item
                                name="fullName"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your full name!',
                                    },
                                ]}
                            >
                                <Input placeholder="Full Name..." />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your phone number!',
                                    },
                                ]}
                            >
                                <Input placeholder="Phone Number..." />
                            </Form.Item>
                            <Form.Item
                                name="age"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your age!',
                                    },
                                ]}
                            >
                                <InputNumber placeholder="Age..." />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input placeholder="Email Address..." type="email" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Password..."
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Your gender"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your sex!',
                                    },
                                ]}
                                name="gender"
                            >
                                <Radio.Group>
                                    <Radio value={1}> Male </Radio>
                                    <Radio value={2}> Female </Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Space style={{ marginTop: '30px' }}>
                                <Button htmlType="submit" className={cx('btn-submit')} loading={loadingReg}>
                                    Request Appointment
                                </Button>
                                <Button type="text">Cancel</Button>
                            </Space>
                        </Form>
                    </div>
                )}
                {isNewCustomer === 2 && (
                    <div className={cx('wrap-login-form')}>
                        <Form form={form} onFinish={handleLogin} validateMessages={validateMessages.validateMessages()}>
                            <Typography.Title className={cx('title')}>Welcome back, please sign in:</Typography.Title>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input type="email" placeholder="Email Address.." />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Password..."
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Form.Item>
                            <Space style={{ marginTop: '20px' }}>
                                <Button htmlType="submit" className={cx('btn-submit')} loading={loading}>
                                    Sign in
                                </Button>
                                <Button type="text">Cancel</Button>
                            </Space>
                        </Form>
                    </div>
                )}
            </Modal>
        </>
    );
}

export default ModalAuth;
