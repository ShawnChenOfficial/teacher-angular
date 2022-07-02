export class Location {
  number?: string;
  street?: string;
  suburb?: string;
  city?: string;
  region?: string;

  constructor(json: any) {
    this.number = json.number;
    this.street = json.street;
    this.suburb = json.suburb;
    this.city = json.city;
    this.region = json.region;
  }
}
