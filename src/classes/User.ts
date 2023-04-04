import * as faker from 'faker';
import { Location } from '../intefaces/Location';

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
