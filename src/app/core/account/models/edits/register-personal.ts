import { UserGender } from '../views/user-gender';

export class RegisterPersonalEdit {
  email: string;
  password: string;
  re_password: string;
  username: string;
  firstname: string;
  lastname: string;
  title: string;
  gender: UserGender;
  phone: string;
  city: string;

  get hasAccountInfo(){
    return this.email && this.password && this.re_password && this.username;
  }
}
