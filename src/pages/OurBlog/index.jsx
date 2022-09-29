import LayoutBlog from '../../layouts/LayoutBlog'
import classNames from 'classnames/bind'
import styles from './OurBlog.module.css'
import PostItem from '../../components/PostItem';

const cx  = classNames.bind(styles)


function OurBlog() {
    return (
        <>
            <LayoutBlog>
                <div className={cx("list-post")}>
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                </div>
            </LayoutBlog>
        </>
    );
}

export default OurBlog;
