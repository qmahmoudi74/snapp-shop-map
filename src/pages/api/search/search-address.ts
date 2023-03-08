import type { NextApiHandler } from "next";
import database from "database.json";

export interface Address {
  id: string;
  city: string;
  street: string;
  lat: number;
  lng: number;
}

export interface IGetSearchAddressResponse {
  result: Address[];
}

export interface IGetSearchAddressRequest {
  address: string;
}

const searchAddressHandler: NextApiHandler<IGetSearchAddressResponse> = async (
  { method, query },
  res
) => {
  if (!["get", "GET"].includes(method ?? "")) {
    res.status(405);
  } else if (!query.address) {
    res.status(400);
  } else {
    setTimeout(() => {
      const result =
        database
          .filter(({ id }) => id.includes(query.address as string))
          .splice(0, 10) ?? [];

      if (!result.length) res.status(404);
      else res.status(200).json({ result });
    }, 300);
  }
};

export default searchAddressHandler;
