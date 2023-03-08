import { faker } from "@faker-js/faker";

faker.setLocale("fa");

interface Address {
  city: string;
  street: string;
  lat: string;
  lng: string;
}

const db = new Array<Address>(1000).fill({
  city: "",
  street: "",
  lat: "",
  lng: ""
});

for (let index = 0; index < 10000; index++)
  db.push({
    city: faker.address.city(),
    street: faker.address.street(),
    lat: faker.address.latitude(),
    lng: faker.address.longitude()
  });

export default db;
