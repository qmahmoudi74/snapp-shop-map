import type { NextApiHandler } from "next";
import database from "database.json";
import { Address } from "pages/api/search/search-address";

export interface IGetAddressResponse {
  address: Address;
}

export interface IGetAddressRequest {
  lat: number;
  lng: number;
}

const getAddressHandler: NextApiHandler<IGetAddressResponse> = async (
  { method, query },
  res
) => {
  if (!["get", "GET"].includes(method ?? "")) {
    res.status(405);
  } else if (!query.lat || !query.lng) {
    res.status(400);
  } else {
    setTimeout(() => {
      const address = database[Math.trunc(Math.random() * 100)];

      if (!address) res.status(404);
      else res.status(200).json({ address });
    }, 300);
  }
};

export default getAddressHandler;
