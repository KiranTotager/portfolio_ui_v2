import type { AxiosError,Method } from "axios";
import { axiosInstance } from "@/Utils/axiosInstance";
type apiParameters={
    url:string,
    method:Method,
    data?:any,
    params?:any,
    headers?:any
}
export const axiosBaseQuery = () => (
    async ({ url, method, data, params, headers }:apiParameters) => {
        try {
            const result = await axiosInstance({
                url: url,
                method,
                data,
                params,
                headers
            });
            return { data: result.data };
        } catch (axiosError) {
            let err:AxiosError = axiosError as AxiosError;
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        };
    }

)