import axios, { type InternalAxiosRequestConfig } from "axios";
export const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    headers:{
        "content-type":"application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config:InternalAxiosRequestConfig)=>{
        return config;
    }
)
axiosInstance.interceptors.response.use(
   
)