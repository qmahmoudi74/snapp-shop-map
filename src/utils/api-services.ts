import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import type { AxiosRequestConfig } from "axios";
import http from "services/http";

export const createGetApi = <Request, Resonse>(config: AxiosRequestConfig) => {
  const fn = async (req: Request) => http<Resonse>({ ...config, params: req });

  const getKey = (req: Request) => [config.url, req];

  const useHook = (req: Request, options?: UseQueryOptions<Resonse>) => {
    const queryKey = getKey(req);
    return useQuery<Resonse>({
      queryKey,
      queryFn: () => fn(req),
      ...options
    });
  };

  return { useHook, getKey, fn };
};
