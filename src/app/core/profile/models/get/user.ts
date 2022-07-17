import { UserGender } from "src/app/core/account/models/views/user-gender";

export class User {
    id: string;
    gender: UserGender;
    firstName: string;
    lastName: string;
    organizationId?: number;
    organizationName?: string;
    email: string;
    phone?: string;
    profileImg?: string;
    backgroundImg?: string;

    constructor(json: any) {
        this.id = json.id;
        this.gender = json.gender as UserGender;
        this.firstName = json.firstName;
        this.lastName = json.lastName;
        this.organizationId = json.organizationId;
        this.organizationName = json.organizationName;
        this.email = json.email;
        this.phone = json.phone;
        this.profileImg = json.profileImg;
        this.backgroundImg = json.backgroundImg;
    }
}