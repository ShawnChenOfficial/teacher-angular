import { Category } from "../get/category";

export class CategoryView {
  name: string;
  active: boolean;
  isLoading: boolean = false;

  constructor(get: Category) {
    this.name = get.name;
    this.active = false;
    this.isLoading = false;
  }
}
