import LayoutBlog from '../../layouts/LayoutBlog';
import classNames from 'classnames/bind';
import styles from './OurBlog.module.css';
import PostItem from '../../components/PostItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllPost } from '../../services/postService';
import formatDate from '../../utils/formatDate';

const cx = classNames.bind(styles);

function OurBlog() {
    const [listPosts, setListPosts] = useState();
    useEffect(() => {
        const handleGetAllPost = async () => {
            try {
                const res = await getAllPost();
                if (res && res.status === 'SUCCESS') {
                    setListPosts(res.data);
                }
                // console.log('list post', res);
            } catch (error) {
                console.log(error);
            }
        };
        handleGetAllPost();
    }, []);
    console.log('listPost', listPosts);
    return (
        <>
            <LayoutBlog setListPosts={setListPosts} listPosts={listPosts}>
                <div className={cx('list-post')}>
                    {listPosts &&
                        listPosts.map((post) => {
                            return (
                                <PostItem
                                    img={post?.thumbnailImage}
                                    key={post?.id}
                                    id={post?.id}
                                    title={post?.title}
                                    content={post?.content}
                                    author={post?.author}
                                    time={formatDate(post?.createAt)}
                                />
                            );
                        })}
                </div>
            </LayoutBlog>
        </>
    );
}

export default OurBlog;
