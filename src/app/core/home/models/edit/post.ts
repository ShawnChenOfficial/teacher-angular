import { PostForm } from "../form/post";
import { Location } from '../../../../core/shared/models/get/location'
import { HttpParams } from "@angular/common/http";

export class PostEdit {
    id?: string;
    title: string;
    categoryId: number;
    description: string;
    startDate: Date;
    location: Location = new Location();

    constructor(form: PostForm) {
        this.id = form.id;
        this.title = form.title;
        this.categoryId = form.categoryId;
        this.description = form.description;
        this.startDate = form.startDate;
        this.location = form.location;
    }

    get param() {
        var params = new HttpParams();

        if (this.id)
            params = params.set('id', this.id);

        params = params.set('title', this.title);
        params = params.set('categoryId', this.categoryId);
        params = params.set('description', this.description);
        params = params.set('startDate', this.startDate.toString());
        params = params.set('location', JSON.stringify(this.location));

        return params;
    }
}