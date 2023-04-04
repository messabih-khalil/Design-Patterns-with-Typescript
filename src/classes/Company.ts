import * as faker from 'faker';
import { Location, LocationCoordinate } from '../intefaces/Location';

export class Company implements Location {
  name: string;
  catchPhrase: string;
  location: LocationCoordinate;
  info: string;

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };

    this.info = faker.lorem.paragraph();
  }
}
