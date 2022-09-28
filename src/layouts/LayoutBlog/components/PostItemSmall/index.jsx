import { Divider, Typography } from "antd";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './PostItemSmall.module.css'

const cx = classNames.bind(styles)

function PostItemSmall() {
    return (
        <>
            <div className={cx('post-item-small')}>
                <img
                    src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/08/post-1-img-150x150.jpg"
                    alt=""
                    className={cx('post-item-small__img')}
                />
                <div className="">
                    <Typography.Title level="3" className={cx('post-item-small__title')}>
                        <Link to={'/'}>5 Benefits Of Integrative Medicine</Link>
                    </Typography.Title>
                    <Typography.Text className={cx('post-item-small__time')}>July 28, 2019</Typography.Text>
                </div>
            </div>
            <Divider style={{margin: '10px 0'}} dashed/>
        </>
    );
}

export default PostItemSmall;
