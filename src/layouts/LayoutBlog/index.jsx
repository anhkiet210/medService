import { Avatar, Col, Divider, List, Row, Space, Typography } from 'antd';
import BreadCrumb from '../../components/BreadCrumb';
import Layout from '../Layout';
import styles from './LayoutBlog.module.css';
import classNames from 'classnames/bind';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThumnailInfoDoctor from '../../components/ThumnailInfoDoctor';
import PostItem from './components/PostItemSmall';
import PostItemSmall from './components/PostItemSmall';

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
                            <Col xs={24} sm={24} md={7} lg={8}>
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
                                                <Divider dashed style={{margin: '0'}}/>
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
            </Layout>
        </>
    );
}

export default LayoutBlog;
