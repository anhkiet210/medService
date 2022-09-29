import { Button } from 'antd';
import { FaArrowUp } from 'react-icons/fa';
import classNames from 'classnames/bind';
import styles from './ScrollToTop.module.css';

const cx = classNames.bind(styles);

function ScrollTotop(props) {
    return (
        <>
            <Button className={cx('scroll-to-top')} onClick={() => props?.scrollTop()}>
                <FaArrowUp />
            </Button>
        </>
    );
}

export default ScrollTotop;
