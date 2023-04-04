import { Marker } from '../intefaces/Marker';

export class CustomMap {
  private map: google.maps.Map;
  private marker;
  constructor(divID: string) {
    this.map = new google.maps.Map(document.getElementById(divID) as Element, {
      zoom: 8,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarkers(obj: Marker) {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: obj.location.lat,
        lng: obj.location.lng,
      },
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: obj.info,
      });

      infoWindow.open(this.map, marker);
    });
  }

  showPopupInfo(info: string) {
    this.marker.add;
  }
}
