import { HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from "projects/auth/src/services/http.service";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { PostEdit } from "../../home/models/edit/post";
import { PostForm } from "../../home/models/form/post";
import { Post } from "../../home/models/get/post";

@Injectable({
    providedIn: 'root',
})
export class PostService {

    constructor(private http: HttpService) {
    }

    getPostsByCategory(categoryId: number) {
        var params = new HttpParams();
        params = params.set('categoryId', categoryId);
        return this.http.get<Array<any>>(environment.baseEndPoint + '/api/post', { params: params }).pipe(map(m => m.map(r => new Post(r))));
    }

    createPost(form: PostForm) {
        var params = new PostEdit(form).param;
        return this.http.authHeader().post(environment.baseEndPoint + '/api/post', params).pipe(map(m => new Post(m)));
    }
}