export class Category {
    id: number;
    name: string;

    constructor(json: any) {
        this.id = json.id;
        this.name = json.name;
    }
}