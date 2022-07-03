import { ExternalOrganization } from "../dtos/external-organization";

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
