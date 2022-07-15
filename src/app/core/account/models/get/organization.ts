import { Location } from '../../../shared/models/get/location';

export class Organization {
  organizationId: number;
  organizationUniqueIdentifier: string;
  organizationName: string;
  profileImagePath: string;
  location?: Location;
  verified: boolean;
  userCount: number;

  constructor(json: any) {
    this.organizationId = json.organizationId;
    this.organizationUniqueIdentifier = json.organizationUniqueIdentifier;
    this.organizationName = json.organizationName;
    this.profileImagePath = json.profileImagePath;
    this.location = json.location ? Location.new(json.location) : new Location();
    this.verified = json.verified;
    this.userCount = json.userCount;
  }
}
