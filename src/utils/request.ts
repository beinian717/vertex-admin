import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { ElNotification } from "element-plus";

const service: AxiosInstance = axios.create({
    baseURL: 'https://www.vertex.com',
    timeout: 5000
})


service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config
    },
    (error) => {
        ElNotification.error({
            title: '请求失败',
            message: error.message
        })
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        // 判断具体的状态码
        if (response.data.code != 200) {
            ElNotification.error({
                title: 'status error',
                message: response.data.message
            })
        } else {
            return response.data
        }
    },
    (error) => {
        ElNotification.error({
            title: 'reponse error',
            message: error.message
        })
        return Promise.reject(error)
    }
)


export default service