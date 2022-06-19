import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { CategoryView } from '../models/views/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Array<CategoryView> = new Array<CategoryView>();

  constructor() {
    this.loadCategories();
  }

  getCategories() {
    return this.categories;
  }

  loadCategories() {
    this.categories = new Array<CategoryView>();
    this.categories.push(new CategoryView('Languages', false));
    this.categories.push(new CategoryView('IT', false));
    this.categories.push(new CategoryView('Instrument', false));
    this.categories.push(new CategoryView('Chemistry', false));
    this.categories.push(new CategoryView('Physics', false));
    this.categories.push(new CategoryView('Fitness', false));
    this.categories.push(new CategoryView('Early Childhood', false));
  }

  startLoadingData() {
    const categories = this.categories;
    return new Observable((observable) => {
      const wait = setInterval(function () {
        if (categories.filter((f) => f.isLoading).length == 0) {
          clearInterval(wait);
          observable.next(categories);
        }
      }, 1000);
    });
  }
}
