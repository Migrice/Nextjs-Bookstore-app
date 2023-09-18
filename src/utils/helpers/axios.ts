import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: "http://127.0.0.1:8000/"
    baseURL:"https://web-production-21f9.up.railway.app/"
})

export default axiosInstance;
