import { Col, Row } from 'antd';
import { useState } from 'react';
import Layout from '../../layouts/Layout';
import ThumnaiDoctor from './component/ThumnaiDoctor';
import { getAllDoctor } from '../../services/doctorService';
import { useEffect } from 'react';

function Doctors() {
    const [listDoctors, setListDoctors] = useState([]);
    useEffect(() => {
        const handleGetAllDoctors = async () => {
            try {
                const res = await getAllDoctor();
                if (res.status === 'SUCCESS') {
                    setListDoctors(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        handleGetAllDoctors();
    }, []);
    console.log('list', listDoctors);
    return (
        <>
            <Layout>
                <Row justify="center">
                    <Col span={18}>
                        <Row>
                            {listDoctors?.map((doctor, index) => (
                                <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6} key={index}>
                                    <ThumnaiDoctor
                                        id={doctor?.id}
                                        img={doctor?.avatar}
                                        name={doctor?.fullName}
                                        job={doctor?.specialist}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Layout>
        </>
    );
}

export default Doctors;
