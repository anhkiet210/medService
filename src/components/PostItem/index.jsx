import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import styles from './PostItem.module.css';
import classNames from 'classnames/bind';
import changeUrl from '../../utils/changeUrl';

const cx = classNames.bind(styles);

function PostItem({ notMore, img, author, title, id, content, time }) {
    return (
        <>
            <div className={cx('post-item')}>
                <img src={img} alt="" className={cx('post-item__img')} />
                <Typography.Title className={cx('post-item__tilte')}>
                    <Link to={`/blog/abc.1.html`}>{title}</Link>
                    {/* <Link to={`/blog/${changeUrl(title)}.${id}.html`}>{title}</Link> */}
                </Typography.Title>
                <Typography.Title level={4} className={cx('post-item__timedoctor')}>
                    {' '}
                    <span>{time}</span> by <span>{author}</span>
                </Typography.Title>
                <Typography.Paragraph className={cx('post-item__discription')}>{content}</Typography.Paragraph>
                {notMore !== 'notMore' && (
                    <Link to={`/blog/abc.1.html`} className={cx('post-item__more-detail')}>
                        {/* <Link to={`/blog/${changeUrl(title)}.${id}.html`} className={cx('post-item__more-detail')}> */}
                        More Details
                    </Link>
                )}
            </div>
        </>
    );
}

export default PostItem;
