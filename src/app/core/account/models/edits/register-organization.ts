import { ExternalOrganization } from "../get/external-organization";

export class RegisterOrganizationEdit {
  email: string;
  password: string;
  re_password: string;
  username: string;
  organization?: ExternalOrganization;

  get hasOrganizationInfo() {
    return this.organization;
  }
}
