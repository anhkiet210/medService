import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import styles from './PostItem.module.css';
import classNames from 'classnames/bind';
import changeUrl from '../../utils/changeUrl';

const cx = classNames.bind(styles);

function PostItem(props) {
    // console.log('title', props);
    // console.log(`/blog/${changeUrl(props?.title)}.${props?.id}.html`);
    return (
        <>
            <div className={cx('post-item')}>
                <img src={props?.img} alt="" className={cx('post-item__img')} />
                <Typography.Title className={cx('post-item__tilte')}>
                    <Link to={`/blog/abc.1.html`}>{props?.title}</Link>
                    <Link to={`/blog/${changeUrl(props?.title)}.${props?.id}.html`}>{props?.title}</Link>
                </Typography.Title>
                <Typography.Title level={4} className={cx('post-item__timedoctor')}>
                    {' '}
                    <span>{props?.time}</span> by <span>{props?.author}</span>
                </Typography.Title>
                <Typography.Paragraph className={cx('post-item__discription')}>{props?.content}</Typography.Paragraph>
                {props?.notMore !== 'notMore' && (
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
