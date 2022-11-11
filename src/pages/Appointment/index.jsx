import { Button, Col, DatePicker, Form, InputNumber, message, Row, Select, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import ThumnailInfoDoctor from '../../components/ThumnailInfoDoctor';
import Layout from '../../layouts/Layout';
import { booking } from '../../services/appointmentService';
import * as validateMessages from '../../utils/message';
import styles from './Appointment.module.css';
import { getAllDoctor } from '../../services/doctorService';

const cx = classNames.bind(styles);

const listDoctors = [
    {
        id: 1,
        name: 'doctor1',
    },
    {
        id: 2,
        name: 'doctor2',
    },
    {
        id: 3,
        name: 'doctor3',
    },
    {
        id: 4,
        name: 'doctor4',
    },
];

function Appointment() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [doctors, setDoctors] = useState([]);

    const handleGetAllDoctor = async () => {
        try {
            const res = await getAllDoctor();
            if (res?.status === 'SUCCESS') {
                setDoctors(res?.data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetAllDoctor();
    }, []);

    const handleBooking = async (value) => {
        try {
            const dateNow = new Date().getTime();
            const time = value.bookedAt._d.valueOf();
            value.bookedAt = time;
            if (!localStorage.getItem('accessToken')) {
                message.warning('You are not logged in');
                return;
            }
            if (dateNow < time) {
                setLoading(true);
                const res = await booking(value);
                if (res && res.status === 'SUCCESS') {
                    message.success('Booking success!');
                    form.resetFields();
                }
                console.log('res', res);
                setLoading(false);
            } else {
                message.warning('Appointment must be after the current date');
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <>
            <Layout>
                <Row justify="center" style={{ marginBottom: '30px' }}>
                    <Col span={18}>
                        <Row>
                            <Col xs={24} sm={24} md={24} lg={16}>
                                <div className={cx('wrap-appointment')}>
                                    <Typography.Title className={cx('title')}>Book an Appointment</Typography.Title>
                                    <Typography.Paragraph className={cx('text')}>
                                        Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus
                                        feugiat dolor lacinia cubilia curae integer congue leo metus, primis in orci
                                        integer metus mollis faucibus enim. Nemo ipsam egestas volute turpis dolores ut
                                        aliquam quaerat sodales sapien undo pretium purus feugiat dolor impedit magna
                                        purus pretium gravida donec ligula massa gravida donec pretium
                                    </Typography.Paragraph>
                                    <Form
                                        onFinish={handleBooking}
                                        form={form}
                                        validateMessages={validateMessages.validateMessages()}
                                    >
                                        <Form.Item
                                            name="doctorId"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Select placeholder="Select doctor" className={cx('form-input')}>
                                                {doctors &&
                                                    doctors?.map((doctor) => (
                                                        <Select.Option value={doctor?.id} key={doctor?.id}>
                                                            {doctor?.fullName}
                                                        </Select.Option>
                                                    ))}
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            name="bookedAt"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <DatePicker
                                                showTime={{ format: 'HH:mm', minuteStep: 5 }}
                                                use12Hours={true}
                                                className={cx('form-input')}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="bookedTime"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <InputNumber placeholder="Booked time" className={cx('form-input')} />
                                        </Form.Item>
                                        <Form.Item
                                            name="content"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                            // valuePropName="data"
                                            // getValueFromEvent={(event, editor) => {
                                            //     const data = editor.getData();
                                            //     return data;
                                            // }}
                                        >
                                            {/* <CKEditor editor={ClassicEditor} /> */}
                                            <TextArea
                                                rows={4}
                                                placeholder="Content booking"
                                                className={cx('form-input')}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button htmlType="submit" className={cx('btn-submit')} loading={loading}>
                                                Request an Appointment
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                    <Typography.Paragraph className={cx('text')}>
                                        * Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor
                                        tempus feugiat dolor lacinia cubilia curae integer congue leo metus, primis in
                                        orci integer metus mollis faucibus enim. Nemo ipsam egestas volute turpis
                                        dolores ut aliquam quaerat sodales sapien undo pretium purus
                                    </Typography.Paragraph>
                                </div>
                            </Col>

                            <Col xs={24} sm={24} md={24} lg={8}>
                                <ThumnailInfoDoctor />
                                <div className={cx('wrap-working-time')}>
                                    <Typography.Title className={cx('working-title')}>Working Time</Typography.Title>
                                    <Typography.Paragraph className={cx('text')}>
                                        Porta semper lacus cursus, feugiat primis ultrice ligula risus auctor at tempus
                                        feugiat dolor lacinia cursus nulla vitae massa
                                    </Typography.Paragraph>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>MON – WED</td>
                                                <td> - </td>
                                                <td>9:00 AM - 7:00 PM</td>
                                            </tr>
                                            <tr>
                                                <td>THURSDAY</td>
                                                <td> - </td>
                                                <td>9:00 AM - 6:30 PM</td>
                                            </tr>
                                            <tr>
                                                <td>FRIDAY</td>
                                                <td> - </td>
                                                <td>9:00 AM - 6:00 PM</td>
                                            </tr>
                                            <tr>
                                                <td>SUN - SUN</td>
                                                <td> - </td>
                                                <td>CLOSED</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Typography.Title className={cx('working-title')}>
                                        Need a personal health plan?
                                    </Typography.Title>
                                    <Typography.Paragraph className={cx('text')}>
                                        Porta semper lacus cursus, and feugiat primis ultrice ligula at risus
                                    </Typography.Paragraph>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Layout>
        </>
    );
}

export default Appointment;
