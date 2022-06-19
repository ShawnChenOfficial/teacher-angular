export class CategoryView {
  name: string;
  active: boolean;
  isLoading: boolean = false;

  constructor(name: string, active: boolean) {
    this.name = name;
    this.active = active;
  }
}
