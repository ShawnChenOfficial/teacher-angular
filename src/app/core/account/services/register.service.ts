import { Injectable } from "@angular/core";
import { HttpService } from "projects/auth/src/services/http.service";
import { environment } from "src/environments/environment";
import { RegisterOrganizationPost } from "../models/posts/register-organization";
import { RegisterPersonalPost } from "../models/posts/register-personal";

@Injectable()
export class RegisterApiService {
    constructor(private http: HttpService) { }

    registerPersonalAccount(post: RegisterPersonalPost) {
        return this.http.post<boolean>(environment.baseEndPoint + '/api/account/register/personal', post);
    }

    registerOrganizationAccount(post: RegisterOrganizationPost) {
        return this.http.post<boolean>(environment.baseEndPoint + '/api/account/register/organization', post);
    }
}