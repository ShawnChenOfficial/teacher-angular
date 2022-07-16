import { Category } from "../get/category";

export class CategoryView {
  id: number;
  name: string;
  active: boolean;

  constructor(get: Category) {
    this.id = get.id;
    this.name = get.name;
    this.active = false;
  }
}
