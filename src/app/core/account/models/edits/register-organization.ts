export class RegisterOrganizationEdit {
  email: string;
  password: string;
  re_password: string;
  username: string;
  organizationName: string;
  organizationIdentifier: string;

  get hasOrganizationInfo() {
    return this.organizationName;
  }
}
