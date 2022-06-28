import { AuthRole } from './auth.role';

export class AuthToken {
  accessToken: string | null;
  refreshToken: string | null;
  expires: Date | null;
  name: string | null;
  userId: string | null;
  organizationId: string | null;
  roles: Array<AuthRole> = [];
  constructor() {
    this.accessToken = null;
    this.accessToken = null;
    this.refreshToken = null;
    this.expires = null;
    this.name = null;
    this.userId = null;
    this.organizationId = null;
  }
}
