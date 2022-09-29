import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import styles from './PostItem.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PostItem({ notMore }) {
    return (
        <>
            <div className={cx('post-item')}>
                <img
                    src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/08/post-1-img-800x400.jpg"
                    alt=""
                    className={cx('post-item__img')}
                />
                <Typography.Title className={cx('post-item__tilte')}>
                    <Link to={'/'}>5 Benefits Of Integrative Medicine</Link>
                </Typography.Title>
                <Typography.Title level={4} className={cx('post-item__timedoctor')}>
                    {' '}
                    <span>July 28, 2019</span> by <span>Dr.Jeremy smith</span>
                </Typography.Title>
                <Typography.Paragraph className={cx('post-item__discription')}>
                    Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut
                    purus. Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit. gravida ultrices felis …
                    Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo…. Donec sodales, nibh vel
                    tristique aliquet, nisi libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna,
                    suscipit in magna dignissim, porttitor hendrerit. gravida ultrices felis … Aliqum mullam blandit
                    tempor sapien gravida donec ipsum, at porta justo…. Donec sodales, nibh vel tristique aliquet, nisi
                    libero suscipit diam, sed tempus ante nulla ut purus. Donec dolor magna, suscipit in magna
                    dignissim, porttitor hendrerit. gravida ultrices felis … Aliqum mullam blandit tempor sapien gravida
                    donec ipsum, at porta justo…. Donec sodales, nibh vel tristique aliquet, nisi libero suscipit diam,
                    sed tempus ante nulla ut purus. Donec dolor magna, suscipit in magna dignissim, porttitor hendrerit.
                    gravida ultrices felis … Aliqum mullam blandit tempor sapien gravida donec ipsum, at porta justo….
                </Typography.Paragraph>
                {notMore !== 'notMore' && (
                    <Link to={'/'} className={cx('post-item__more-detail')}>
                        More Details
                    </Link>
                )}
            </div>
        </>
    );
}

export default PostItem;
