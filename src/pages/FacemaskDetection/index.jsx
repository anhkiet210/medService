import Layout from '../../layouts/Layout';
import classNames from 'classnames/bind';
import styles from './FacemaskDetection.module.css';
import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, Card, Spin } from 'antd';

const names = ['Không khẩu trang', 'Có khẩu trang'];

const cx = classNames.bind(styles);

function FacemakDetection() {
    return (
        <>
            <Layout>
                <Row justify="center">
                    <Col span={18}>
                        <div className={cx('wrapper')}>
                            <iframe src="https://yolov5-testing.web.app/" className={cx('frame')}></iframe>
                        </div>
                    </Col>
                </Row>
            </Layout>
        </>
    );
}

export default FacemakDetection;
