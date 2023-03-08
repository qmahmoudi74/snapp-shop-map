import type { NextApiHandler } from "next";
import db from "db";

export interface IGetSearchAddressResponse {
  lat: number;
  lng: number;
}

export interface IGetSearchAddressRequest {
  address: string;
}

export interface IGetSearchAddressError {
  message: string;
}

const searchAddressHandler: NextApiHandler<
  IGetSearchAddressResponse | IGetSearchAddressError
> = async ({ method, query }, res) => {
  if (!["get", "GET"].includes(method ?? "")) {
    res.status(405).send({ message: "method not allowed!" });
  } else if (!query.address) {
    res.status(400).send({ message: "address must be send!" });
  } else {
    setTimeout(() => {
      const { lat, lng } = db.find(({ city }) => query.address === city) ?? {};

      if (!lat || !lng) res.status(404).send({ message: "not found!" });
      else res.status(200).json({ lat: Number(lat), lng: Number(lng) });
    }, 150);
  }
};

export default searchAddressHandler;
