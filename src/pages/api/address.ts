import { faker } from "@faker-js/faker";
import type { NextApiHandler } from "next";

type City = string;
type Street = string;
type Address = [City, Street];

export interface AddressResponse {
  address: [City, Street];
}

export interface AddressRequest {
  lat: number;
  lng: number;
}

export interface AddressError {
  message: string;
}

const cache = new Map();

const addressHandler: NextApiHandler<AddressResponse | AddressError> = (
  { method, query },
  res
) => {
  const cachedItem = cache.get(`${query.lat}/${query.lng}`);

  if (!["get", "GET"].includes(method ?? "")) {
    res.status(405).send({ message: "method not allowed!" });
  } else if (!query.lat || !query.lng) {
    res.status(400).send({ message: "lat and lng must be send!" });
  } else if (cachedItem) {
    res.status(200).json({ address: cachedItem });
  } else {
    const address = [faker.address.city(), faker.address.street()] as Address;
    cache.set(`${query.lat}/${query.lng}`, address);
    setTimeout(() => res.status(200).json({ address }), 150);
  }
};

export default addressHandler;
