import axios, { AxiosInstance } from "axios";

let axiosInstance: AxiosInstance;

const createAxiosInstance = (): AxiosInstance => {
  axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  });
  return axiosInstance;
};

const getAxiosInstance = () => {
  if (!axiosInstance) {
    return createAxiosInstance();
  }
  return axiosInstance;
};

export { getAxiosInstance };
