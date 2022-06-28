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
  phonePrefix?: string;
  phone: string;
  city: string;
}
