import { RegisterPersonalEdit } from '../edits/register-personal';
import { UserGender } from '../views/user-gender';

export class RegisterPersonalPost {
  email: string;
  password: string;
  re_password: string;
  username: string;
  firstname: string;
  lastname: string;
  title: string;
  gender: UserGender;
  dob: Date;
  phone: string;
  city: string;

  constructor(edit: RegisterPersonalEdit) {
    this.email = edit.email;
    this.password = edit.password;
    this.re_password = edit.re_password;
    this.username = edit.username;
    this.firstname = edit.firstname;
    this.lastname = edit.lastname;
    this.title = edit.title;
    this.gender = edit.gender!;
    this.phone = `${edit.phonePrefix}${edit.phone}`;
    this.city = edit.city;
  }
}
