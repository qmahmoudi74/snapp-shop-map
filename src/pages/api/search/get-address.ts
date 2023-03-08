import type { NextApiHandler } from "next";
import db from "db";

type City = string;
type Street = string;
type Address = [City, Street];

export interface IGetAddressResponse {
  address: Address;
}

export interface IGetAddressRequest {
  lat: number;
  lng: number;
}

export interface IGetAddressError {
  message: string;
}

const getAddressHandler: NextApiHandler<
  IGetAddressResponse | IGetAddressError
> = async ({ method, query }, res) => {
  if (!["get", "GET"].includes(method ?? "")) {
    res.status(405).send({ message: "method not allowed!" });
  } else if (!query.lat || !query.lng) {
    res.status(400).send({ message: "lat and lng must be send!" });
  } else {
    setTimeout(() => {
      const { city, street } =
        db.find(({ lat, lng }) => query.lat === lat && query.lng === lng) ?? {};

      if (!city || !street) res.status(404).send({ message: "not found!" });
      else res.status(200).json({ address: [city, street] });
    }, 150);
  }
};

export default getAddressHandler;
