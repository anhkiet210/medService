import { Divider, Typography } from 'antd';
import classNames from 'classnames/bind';
import styles from './ThumnailInfoDoctor.module.css';

const cx = classNames.bind(styles);

function ThumnailInfoDoctor() {
    return (
        <>
            <div className={cx('wrap-info-doctor')}>
                <Typography.Title className={cx('wrap-info-doctor__title')}>The Heart Of Clinic</Typography.Title>
                <Divider />
                <div className={cx('info-doctor')}>
                    <img
                        src="https://jthemes.net/themes/wp/medservices/wp-content/uploads/2019/07/head-of-clinic.jpg"
                        alt=""
                    />
                    <div className="">
                        <Typography.Title level={2} className={cx('info-doctor__name')}>
                            Dr. Jonathan Barnes
                        </Typography.Title>
                        <Typography.Title level={5} className={cx('info-doctor__job')}>
                            Chief Medical Officer
                        </Typography.Title>
                        <Typography.Title level={2} className={cx('info-doctor__phone')}>
                            1-800-1234-567
                        </Typography.Title>
                    </div>
                </div>
                <Typography.Paragraph className={cx('text')}>
                    Aliquam orci nullam tempor sapien orci gravida donec enim ipsum porta justo integer at velna vitae
                    auctor integer congue
                </Typography.Paragraph>
            </div>
        </>
    );
}

export default ThumnailInfoDoctor;
