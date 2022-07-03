import { SearchResult, SearchResultable } from "src/app/common/models/search-result";

export class ExternalOrganization extends SearchResultable {

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
  region: string;

  constructor(json: any) {
    super();
    this.organizationName = json.Org_Name;
    this.organizationUniqueIdentifier = json.School_Id;
    this.telephone = json.Telephone;
    this.email = json.Email;
    this.fax = json.Fax;
    this.url = json.Url;
    this.address = json.Add1_Line1;
    this.suburb = json.Add1_Suburb;
    this.city = json.Add1_City;
    this.postcode = json.Add2_Postal_Code;
    this.region = json.Education_Region;
  }

  get fullAddress() {
    return `${this.address} ${this.suburb} ${this.city} ${this.postcode}`;
  }

  toSearchResult(): SearchResult {
    return new SearchResult(this.organizationName, this.fullAddress, this)
  }
}
