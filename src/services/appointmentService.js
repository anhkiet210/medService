import * as request from '../utils/request';

export const booking = async (value) => {
    try {
        const res = await request.post('/booking/book', value)
        return res.data
    } catch (error) {
        console.log(error);
    }
};
