import request from '../utils/request';

export const getMyProfile = async () => {
    try {
        const res = await request.post('/users/my-profile');
        return res.data;
    } catch (error) {}
};
