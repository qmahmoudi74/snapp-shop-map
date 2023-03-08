import {
  IGetAddressRequest,
  IGetAddressResponse
} from "pages/api/search/get-address";
import {
  IGetSearchAddressRequest,
  IGetSearchAddressResponse
} from "pages/api/search/search-address";
import { createGetApi } from "utils/api-services";

export const {
  useHook: useGetAddress,
  getKey: getAddressKey,
  fn: getAddress
} = createGetApi<IGetAddressRequest, IGetAddressResponse>({
  url: "/search/get-address"
});

export const {
  useHook: useGetSearchAddress,
  getKey: getSearchAddressKey,
  fn: getSearchAddress
} = createGetApi<IGetSearchAddressRequest, IGetSearchAddressResponse>({
  url: "/search/search-address"
});
