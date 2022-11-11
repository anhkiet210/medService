import { Button, message, Row, Typography } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LayoutMyAccount from '../../layouts/LayoutMyAccount';
import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getMyProfile } from '../../services/userService';

const data = [
    {
        id: 1,
        name: 'Dashboard',
        path: '/my-account',
    },
    {
        id: 2,
        name: 'Orders',
        path: '/my-account/orders',
    },
    {
        id: 3,
        name: 'Account details',
        path: '/my-account/account-detail',
    },
];

function MyAccount() {
    const [idxTab, setIdxTab] = useState(1);
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    // const handleChangeTab = (idx) => {
    //   setIdxTab(idx);
    // };

    // const token = localStorage.getItem('accessToken');
    useEffect(() => {
        if (!localStorage.getItem('accessToken')) {
            message.warning('You are not logged in');
            navigate('/');
        }
    }, []);

    useEffect(() => {
        const handleGetMyProfile = async () => {
            try {
                const res = await getMyProfile();
                if (res && res?.status === 'SUCCESS') {
                    // console.log('res', res);
                    setUser(res?.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        handleGetMyProfile();
    }, []);

    const handleLogout = async () => {
        const res = await authService.logout();
        if (res && res.status === 'SUCCESS') {
            localStorage.removeItem('accessToken');
            navigate('/');
        }
        console.log(res);
    };

    // console.log(idxTab);

    return (
        <>
            <LayoutMyAccount>
                <Row style={{ padding: '30px' }}>
                    <Typography.Text
                        style={{
                            fontSize: '17px',
                            color: '#ccc',
                            fontWeight: '300',
                        }}
                    >
                        Hello <Typography.Text strong={true}>{user?.fullName}</Typography.Text> (not{' '}
                        <Typography.Text strong={true}>{user?.fullName}</Typography.Text>?
                        <Button
                            style={{
                                backgroundColor: 'transparent',
                                border: 'none',
                                fontSize: '17px',
                                color: '#00a3c8',
                                fontWeight: '300',
                                padding: '0',
                            }}
                            onClick={handleLogout}
                        >
                            Log out
                        </Button>
                        )
                    </Typography.Text>
                    <Typography.Paragraph
                        style={{
                            fontSize: '17px',
                            color: '#ccc',
                            fontWeight: '300',
                        }}
                    >
                        From your account dashboard you can view your{' '}
                        <Link to={'/my-account/orders'}>recent orders</Link>, manage your{' '}
                        <Link to={'/my-account/address'}>shipping and billing addresses</Link>, and{' '}
                        <Link to={'/my-account/account-detail'}>edit your password and account details</Link>.
                    </Typography.Paragraph>
                </Row>
            </LayoutMyAccount>
        </>
    );
}

export default MyAccount;
