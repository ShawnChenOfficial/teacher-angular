import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastEventType } from 'src/app/common/models/toast';
import { ToastService } from 'src/app/common/services/toast.service';
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

  categories: Array<CategoryView> = [];

  isLoading = false;
  isAll = false;

  constructor(private categoryService: CategoryService) {
    this.isLoading = true;
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      this.isAll = this.categories.filter((f) => f.active).length == 0;
      this.isLoading = false;
    })
  }

  ngOnInit(): void { }

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
