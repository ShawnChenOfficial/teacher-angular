import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryView } from './models/views/category';
import { CategoryService } from './services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Output()
  selectCategoryEvent: EventEmitter<any> = new EventEmitter<any>();

  categories: Array<CategoryView>;

  isAll = false;

  constructor(private categoryService: CategoryService) {
    this.categories = categoryService.getCategories();
    this.isAll = this.categories.filter((f) => f.active).length == 0;
  }

  ngOnInit(): void {}

  setCategoryStatus(category: CategoryView | null) {
    this.categories.forEach((f) => (f.active = false));
    if (category) {
      category.active = true;
      this.isAll = false;
    } else {
      this.isAll = true;
    }
    this.selectCategoryEvent.emit(category);
  }
}
