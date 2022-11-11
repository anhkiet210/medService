import { Button, Col, Form, Input, Row, Select, Typography } from 'antd';
import Layout from '../../layouts/Layout';
import styles from './AddPost.module.css';
import classNames from 'classnames/bind';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import * as validateMessages from '../../utils/message';
import BreadCrumb from '../../components/BreadCrumb';
const cx = classNames.bind(styles);

function AddPost() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (value) => {};
    return (
        <>
            <Layout>
                <BreadCrumb title="Add your post" />
                <Row justify={'center'}>
                    <Col span={18}>
                        <div className="">
                            <Form
                                onFinish={handleSubmit}
                                form={form}
                                validateMessages={validateMessages.validateMessages()}
                            >
                                <Form.Item
                                    name="title"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input placeholder="Enter post title" />
                                </Form.Item>

                                <Form.Item
                                    name="content"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                    valuePropName="data"
                                    getValueFromEvent={(event, editor) => {
                                        const data = editor.getData();
                                        return data;
                                    }}
                                >
                                    <CKEditor editor={ClassicEditor} />
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="submit" className={cx('btn-submit')} loading={loading}>
                                        Request an Appointment
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Col>
                </Row>
                
            </Layout>
        </>
    );
}

export default AddPost;
