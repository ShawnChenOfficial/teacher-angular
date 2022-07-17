import { Injectable } from "@angular/core";
import { HttpService } from "projects/auth/src/services/http.service";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { User } from "../models/get/user";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpService) { }

    getUserProfile() {
        return this.http.authHeader().get(environment.baseEndPoint + '/api/profile').pipe(map(m => new User(m)));
    }
}