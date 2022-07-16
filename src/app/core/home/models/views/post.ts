import { Post } from "../get/post";
import { Location } from '../../../../core/shared/models/get/location'

export class PostView {
    id: string;
    categoryId: number;
    categoryName: string;
    title: string;
    description: string;
    startDate: Date;
    location: Location;

    constructor(post: Post) {
        this.id = post.id;
        this.title = post.title;
        this.categoryId = post.categoryId;
        this.categoryName = post.categoryName;
        this.description = post.description;
        this.startDate = post.startDate;
        this.location = post.location;
    }
}