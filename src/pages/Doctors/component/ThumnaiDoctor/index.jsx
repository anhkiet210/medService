import styles from './ThumnailDoctor.module.css';
import classNames from 'classnames/bind';
import { Button, Typography } from 'antd';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ThumnaiDoctor(props) {
    return (
        <>
            <div className={cx('wrap-thumnai')}>
                <div className={cx('thumnail-doctor')}>
                    <div className={cx('thumnail-img')}>
                        <img src={props?.img} alt="" />
                    </div>
                    <Typography.Title className={cx('thumnail-name')}>{props?.name}</Typography.Title>
                    <Typography.Text className={cx('thumnail-job')}>{props?.job}</Typography.Text>
                    <Button className={cx('thumnail-btn')}>
                        <Link to={`/info-doctor/${props?.id}`}>View More Info</Link>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default ThumnaiDoctor;
