import casual from 'casual';

interface Location {
  lat: string;
  lng: string;
}

class User {
  name: string;
  location: Location;

  constructor() {
    this.name = casual.name;
    this.location = { lat: casual.latitude, lng: casual.longitude };
  }
}
