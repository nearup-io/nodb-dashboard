import axios, { Axios } from "axios";

let axiosInstance: Axios;

const createAxiosInstance = (): Axios => {
  axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return axiosInstance;
};

const getAxiosInstance = () => {
  if (!axiosInstance) {
    return createAxiosInstance();
  }
  return axiosInstance;
};

const setAxiosInstanceDefaultHeaders = (token: string) => {
  getAxiosInstance().defaults.headers.common = {
    ...getAxiosInstance().defaults.headers.common,
    Authorization: `Bearer ${token}`,
  };
};

export { getAxiosInstance, setAxiosInstanceDefaultHeaders };
