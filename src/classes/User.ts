import * as faker from 'faker';

interface Location {
  lat: number;
  lng: number;
}

export class User {
  name: string;
  location: Location;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
