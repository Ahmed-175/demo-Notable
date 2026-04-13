import axiosInstance from "../api/axiosInstance";
import { endpoint } from "../api/endpoints";
import type { IAuth } from "../types/auth.type";

export const login = async (
  email: string,
  password: string,
): Promise<IAuth> => {
  const res = await axiosInstance.post(endpoint.login, {
    email,
    password,
  });

  return res.data;
};

export const register = async (
  username: string,
  email: string,
  password: string,
): Promise<IAuth> => {
  const res = await axiosInstance.post(endpoint.register, {
    username,
    email,
    password,
  });

  return res.data;
};
