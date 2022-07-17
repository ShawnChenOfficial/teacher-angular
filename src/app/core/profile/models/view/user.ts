import { UserGender } from "src/app/core/account/models/views/user-gender";
import { User } from "src/app/core/profile/models/get/user";

export class UserView {
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

    constructor(get: User) {
        this.id = get.id;
        this.gender = get.gender;
        this.firstName = get.firstName;
        this.lastName = get.lastName;
        this.organizationId = get.organizationId;
        this.organizationName = get.organizationName;
        this.email = get.email;
        this.phone = get.phone;
        this.profileImg = get.profileImg;
        this.backgroundImg = get.backgroundImg;
    }
}