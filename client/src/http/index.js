import axios from "axios";

const $api = axios.create({
    withCredentials: false,
    baseURL: process.env.REACT_APP_API_URL
});



export default $api