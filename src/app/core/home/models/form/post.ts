import { PostView } from "../views/post";
import { Location } from '../../../../core/shared/models/get/location'

export class PostForm {
    id?: string;
    title: string;
    categoryId: number;
    description: string;
    startDate: Date;
    location: Location = new Location();

    constructor() {
    }

    static fromView(view: PostView) {
        let form = new PostForm();
        form.id = view.id;
        form.title = view.title;
        form.categoryId = view.categoryId;
        form.description = view.description;
        form.startDate = view.startDate;
        form.location = view.location;
        return form;
    }
}