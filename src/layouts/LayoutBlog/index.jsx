import { PlusOutlined } from '@ant-design/icons';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Button, Col, Divider, Form, Input, List, Modal, Row, Space, Typography, Upload } from 'antd';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import ThumnailInfoDoctor from '../../components/ThumnailInfoDoctor';
import { upload } from '../../services/imgService';
import * as validateMessages from '../../utils/message';
import Layout from '../Layout';
import PostItemSmall from './components/PostItemSmall';
import styles from './LayoutBlog.module.css';
import { createPost } from '../../services/postService';

const cx = classNames.bind(styles);

const data = [
    {
        id: 1,
        name: 'Elderly Care (1)',
        link: 'category/elderly-care',
    },
    {
        id: 2,
        name: 'Lifestyle (3)',
        link: 'category/lifestyle/',
    },
    {
        id: 3,
        name: 'Medical (3)',
        link: 'category/medical/',
    },
];

function LayoutBlog({ children }) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [img, setImg] = useState();
    const token = localStorage.getItem('accessToken')

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleShowModal = () => {
        setIsModalOpen(true);
    };

    const handleSubmit = async (value) => {
        try {
            setLoading(true);
            console.log('submit', value);
            const info = {
                title: value.title,
                content: value.content,
            };
            const formData = new FormData();
            formData.append('file', value.uploadImg);
            // const res = await axios.post('https://med-service-demo.herokuapp.com/api/upload', formData);
            const res = await upload(formData);
            console.log('img', res);
            const resUpdate = await createPost(info);
            form.resetFields();
            console.log('update', resUpdate);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    return (
        <>
            <Layout>
                <BreadCrumb title={'Our Blogs & Latest News'} />
                <Row justify="center">
                    <Col span={18}>
                        <Row>
                            <Col xs={24} sm={24} md={17} lg={16}>
                                {children}
                            </Col>
                            <Col xs={24} sm={24} md={7} lg={8} style={{ paddingTop: '50px' }}>
                                <Button onClick={handleShowModal} className={cx('btn-submit')}>
                                    Add post
                                </Button>
                                <ThumnailInfoDoctor />
                                <div className={cx('wrapper')}>
                                    <Typography.Title className={cx('title')}>Categories</Typography.Title>
                                    <Divider style={{ margin: '10px 0' }} />
                                    <List
                                        split={false}
                                        dataSource={data}
                                        renderItem={(item) => (
                                            <>
                                                <List.Item className={cx('text')} key={item.id}>
                                                    <Link to={item.link}>
                                                        <Typography.Text>
                                                            <FaAngleDoubleRight
                                                                style={{ color: '#00a3c8', verticalAlign: 'middle' }}
                                                            />
                                                        </Typography.Text>{' '}
                                                        {item.name}
                                                    </Link>
                                                </List.Item>
                                                <Divider dashed style={{ margin: '0' }} />
                                            </>
                                        )}
                                    />
                                </div>

                                <div className={cx('wrapper')}>
                                    <Typography.Title className={cx('title')}>Popular Posts</Typography.Title>
                                    <Divider />
                                    <Space direction="vertical">
                                        <PostItemSmall />
                                        <PostItemSmall />
                                        <PostItemSmall />
                                        <PostItemSmall />
                                        <PostItemSmall />
                                    </Space>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Modal
                    title="ADD POST"
                    visible={isModalOpen}
                    footer={null}
                    bodyStyle={{ maxHeight: '90vh', overflowY: 'scroll' }}
                    onCancel={handleCancel}
                >
                    <Form onFinish={handleSubmit} form={form} validateMessages={validateMessages.validateMessages()}>
                        <Form.Item
                            name="title"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            label="Title"
                        >
                            <Input placeholder="Enter post title" />
                        </Form.Item>
                        <Form.Item label="Upload" name="uploadImg">
                            <Upload action="/upload.do" listType="picture-card">
                                <div>
                                    <PlusOutlined />
                                    <div
                                        style={{
                                            marginTop: 8,
                                        }}
                                    >
                                        Upload
                                    </div>
                                </div>
                            </Upload>
                            {/* <input type="file" placeholder="file" /> */}
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
                            <Button htmlType="submit" className={cx('btn-submit')} loading={loading} disabled={!token}>
                                Add post
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </Layout>
        </>
    );
}

export default LayoutBlog;
