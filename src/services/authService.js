import * as request from '../utils/request'

export const register = async (info) => {
    try {
        const res = await request.post('/users/register', info)
        return res.data
    } catch (err) {
        console.log(err);
    }
}

export const login = async (user) => {
    try {
        const res = await request.post('/login', user)
        return res.data
    } catch (error) {
        console.log(error);
    }
}