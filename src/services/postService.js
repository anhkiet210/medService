import * as request from '../utils/request';

export const getAllPost = async () => {
    try {
        const res = await request.post('/admin/post/all');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const getPostById = async (id) => {
    try {
        const res = await request.post(`/content/get-post/${id}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export const createPost = async (data) => {
    try {
        const res = await request.post('/content/post', data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
