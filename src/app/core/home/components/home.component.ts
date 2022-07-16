import { Component, OnInit } from '@angular/core';
import { CategoryView } from '../models/views/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  selectedCategory: CategoryView | null = null;

  categories: Array<CategoryView> = [];

  isLoading = false;
  displayAllCategory = false;

  constructor(private categoryService: CategoryService) {
    this.isLoading = true;
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      this.displayAllCategory = this.categories.filter((f) => f.active).length == 0;
      this.isLoading = false;
    })
  }

  ngOnInit(): void { }

  setCategoryStatus(category: CategoryView | null) {
    this.categories.forEach((f) => (f.active = false));
    if (category) {
      category.active = true;
      this.displayAllCategory = false;
    } else {
      this.displayAllCategory = true;
    }

    this.selectedCategory = category;
  }

  categoryLoadComplete(categories: Array<CategoryView>) {
    this.categories = categories;
  }
}
