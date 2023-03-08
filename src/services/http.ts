import axios, { AxiosRequestConfig } from "axios";
import { AXIOS_TIME_OUT } from "utils/constants";

export const axiosIns = axios.create({ timeout: AXIOS_TIME_OUT });

const http = async <Response, Error>(config: AxiosRequestConfig) => {
  return axiosIns.request<Response | Error>(config);
};

export default http;
