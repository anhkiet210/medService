import * as request from '../utils/request';

export const getAllDoctor = async () => {
    try {
        const res = await request.post('/doctor/get-doctor-list');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getInfoDoctor = async (id) => {
    try {
        const res = await request.post(`/api/users/profile/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
