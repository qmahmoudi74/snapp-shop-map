import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "utils/constants";

export const axiosIns = axios.create({
  baseURL: BASE_URL,
  timeout: 3 * 1000
});

const http = async <Response>(config: AxiosRequestConfig) => {
  return (await axiosIns.request<Response>(config)).data;
};

export default http;
