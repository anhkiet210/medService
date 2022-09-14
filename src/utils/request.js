import axios from "axios";

const request = axios.create({
  baseURL: "https://med-service-demo.herokuapp.com/api",
});

export const get = async (path, option = {}) => {
    const responese = await request.get(path, option)
    return responese.data
}

export const post = async (path, option = {}) => {
    const responese = await request.post(path, option)
    return responese
}

export default request;
