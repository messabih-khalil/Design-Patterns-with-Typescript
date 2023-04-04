import { User } from './classes/User';
import { Company } from './classes/Company';

const user: User = new User();
const company: Company = new Company();

new google.maps.Map(document.getElementById('map') as Element, {
  zoom: 8,
  center: {
    lat: 0,
    lng: 0,
  },
});
