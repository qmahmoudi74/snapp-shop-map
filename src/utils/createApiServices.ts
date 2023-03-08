import type { AxiosRequestConfig } from "axios";
import http from "services/http";

const createApiServices = <Request, Resonse, Error>(
  config: AxiosRequestConfig
) => {
  const { method, url, params, data } = config;

  if (["GET", "get"].includes(method ?? "")) {
    const fn = async (req: Request) => http<Resonse, Error>(config);
    const getKey = (req: Request) => [config.url, req];
    return [];
  } else {
    return [];
  }
};

export default createApiServices;
