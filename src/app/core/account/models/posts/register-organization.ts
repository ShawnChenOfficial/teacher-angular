import { RegisterOrganizationEdit } from '../edits/register-organization';
import { UserGender } from '../views/user-gender';

export class RegisterOrganizationPost {
  email: string;
  password: string;
  re_password: string;
  username: string;
  organizationName: string;
  organizationUniqueIdentifier: string;
  organizationEmail?: string;
  organizationPhone?: string;
  organizationRegion: string;
  organizationAddress: string;
  organizationSuburb: string;
  organizationCity: string;
  organizationPostCode: number;

  constructor(edit: RegisterOrganizationEdit) {
    this.email = edit.email;
    this.password = edit.password;
    this.re_password = edit.re_password;
    this.username = edit.username;
    this.organizationName = edit.organization!.organizationName!;
    this.organizationUniqueIdentifier = edit.organization!.organizationUniqueIdentifier!.toString();
    this.organizationEmail = edit.organization!.email;
    this.organizationPhone = edit.organization!.telephone;
    this.organizationRegion = edit.organization!.region;
    this.organizationAddress = edit.organization!.address;
    this.organizationSuburb = edit.organization!.suburb;
    this.organizationCity = edit.organization!.city;
    this.organizationPostCode = edit.organization!.postcode;
  }
}
