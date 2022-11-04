import * as request from '../utils/request';

export const getAllPost = async () => {
    try {
        const res = await request.post('/admin/post/all');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
