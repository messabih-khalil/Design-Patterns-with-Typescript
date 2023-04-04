import * as faker from 'faker';
import { LocationCoordinate } from '../intefaces/Location';

export class User {
  name: string;
  location: LocationCoordinate;
  info: string;
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };

    this.info = faker.lorem.paragraph();
  }
}
