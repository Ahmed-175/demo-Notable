import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axios.interceptors.response.use(
  (res) => res,
  (error: any) => {
    console.log(error.response.data);
    return Promise.reject({
      message: error.response?.data?.message || "Something went wrong",
      status: error.response?.statusCode || 500,
    });
  },
);

export default axiosInstance;
