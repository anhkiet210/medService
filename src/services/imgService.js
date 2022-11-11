import request from '../utils/request';

export const upload = async (img) => {
    try {
        const res = await request.post('/upload', img);
        return res;
    } catch (error) {
        console.log(error);
    }
};
