import LayoutBlog from '../../layouts/LayoutBlog';
import classNames from 'classnames/bind';
import styles from './OurBlog.module.css';
import PostItem from '../../components/PostItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllPost } from '../../services/postService';

const cx = classNames.bind(styles);

function OurBlog() {
    const [listPosts, setListPosts] = useState();
    useEffect(() => {
        const handleGetAllPost = async () => {
            try {
                const res = await getAllPost();
                if (res.status === 'SUCCESS') {
                    setListPosts(res.data);
                }
                console.log('list post', res);
            } catch (error) {
                console.log(error);
            }
        };
        handleGetAllPost();
    }, []);
    return (
        <>
            <LayoutBlog>
                <div className={cx('list-post')}>
                    {listPosts &&
                        listPosts.map((post) => (
                            <PostItem
                                img={post?.thumbnailImage}
                                key={post?.id}
                                id={post?.id}
                                title={post?.title}
                                content={post?.content}
                                author={post?.author}
                                time={post?.createAt?.slice(0, 10)}
                            />
                        ))}
                </div>
            </LayoutBlog>
        </>
    );
}

export default OurBlog;
