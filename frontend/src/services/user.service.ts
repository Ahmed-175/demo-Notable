import axiosInstance from "../api/axiosInstance"
import { endpoint } from "../api/endpoints"
import type { IUser } from "../types/user.type";


 export const getMe = async (): Promise<IUser> =>  {
    const res  = await axiosInstance.get(endpoint.me);
    return res.data
}