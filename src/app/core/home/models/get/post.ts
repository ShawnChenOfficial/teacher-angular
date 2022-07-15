import { Location } from '../../../../core/shared/models/get/location'

export class Post {
    id: string;
    title: string;
    categoryId: number;
    categoryName: string;
    description: string;
    startDate: Date;
    userId: string;
    createdBy: Date;
    location: Location;

    constructor(json: any) {
        this.id = json.id;
        this.title = json.title;
        this.categoryId = json.categoryId;
        this.categoryName = json.categoryName;
        this.description = json.description;
        this.startDate = json.startDate;
        this.userId = json.userId;
        this.createdBy = json.createdBy;
        this.location = json.location ? Location.new(json.location) : new Location();
    }
}

export class PostByCategory {
    categoryId: string;
    posts: Array<Post>;

    constructor(json: any) {
        this.categoryId = json.categoryId;
        this.posts = (json.posts as Array<any>).map(m => new Post(m));
    }
}