import { Typography } from 'antd';
import classNames from 'classnames/bind';
import { json, Link } from 'react-router-dom';
import LayoutBlog from '../../layouts/LayoutBlog';
import styles from './PostDetail.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostById } from '../../services/postService';
import formatDate from '../../utils/formatDate';
import parse, { domToReact } from 'html-react-parser';
import { parseTwoDigitYear } from 'moment';
import HTMLReactParser from 'html-react-parser';

const cx = classNames.bind(styles);

function PostDetail() {
    const params = useParams();
    const id = params?.id;
    const [post, setPost] = useState({});
    const handleGetPostById = async (id) => {
        try {
            const res = await getPostById(id);
            if (res && res?.status === 'SUCCESS') {
                setPost(res?.data[0]);
            }
            console.log('res', res);
        } catch (error) {
            console.log(error);
        }
    };
    console.log('posst', typeof post?.content);

    useEffect(() => {
        handleGetPostById(id);
    }, [id]);
    return (
        <>
            <LayoutBlog>
                <div className={cx('wrap-post-detail')}>
                    <img
                        src={post?.thumbnailImage}
                        alt=""
                        // className={cx('post-item__img')}
                    />
                    <Typography.Title className={cx('post-detail__tilte')}>{post?.title}</Typography.Title>
                    <Typography.Title level={4} className={cx('post-detail__timedoctor')}>
                        {' '}
                        <span>{formatDate(post?.createAt)}</span> by{' '}
                        <span>
                            <Link to={'/'}>{post?.author}</Link>
                        </span>
                    </Typography.Title>
                </div>
                <div className={cx('post-detail__content')} style={{ marginBottom: '50px' }}>
                    {post?.content}
                </div>
                {/* <div className={cx('related-post')}>
                    <Typography.Title className={cx('title')}>Related Posts</Typography.Title>
                    <Divider />
                    <div className={cx('list-replate-post')}>
                        <PostItem notMore="notMore"/>
                        <PostItem notMore="notMore"/>
                        <PostItem notMore="notMore"/>
                        <PostItem notMore="notMore"/>
                    </div>
                </div> */}
            </LayoutBlog>
        </>
    );
}

export default PostDetail;
