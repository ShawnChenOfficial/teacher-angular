export class Location {
  number?: string;
  street?: string;
  suburb?: string;
  city?: string;
  region?: string;

  constructor() {
  }

  static new(json: any) {
    let location = new Location();

    location.number = json.number;
    location.street = json.street;
    location.suburb = json.suburb;
    location.city = json.city;
    location.region = json.region;

    return location;
  }
}
