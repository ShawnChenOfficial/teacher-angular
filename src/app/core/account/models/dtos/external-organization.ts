export class ExternalOrganization {
  organizationName: string;
  organizationUniqueIdentifier: string;
  telephone: string;
  email: string;
  url: string;
  fax: string;
  address: string;
  suburb: string;
  city: string;
  postcode: number;

  constructor(json: any) {
    this.organizationName = json.Org_Name;
    this.organizationUniqueIdentifier = json.School_id;
    this.telephone = json.Telephone;
    this.email = json.Email;
    this.fax = json.Fax;
    this.url = json.Url;
    this.address = json.Add1_Line1;
    this.suburb = json.Add1_Suburb;
    this.city = json.Add1_City;
    this.postcode = json.Add2_Postal_Code;
  }

  get fullAddress(){
    return `${this.address} ${this.suburb} ${this.city} ${this.postcode}`;
  }
}
