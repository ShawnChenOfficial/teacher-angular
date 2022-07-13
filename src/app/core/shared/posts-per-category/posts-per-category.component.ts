import { Component, Input, OnInit } from '@angular/core';
import { CategoryView } from '../../home/categories/models/views/category';

@Component({
  selector: 'app-posts-per-category',
  templateUrl: './posts-per-category.component.html',
  styleUrls: ['./posts-per-category.component.scss'],
})
export class PostsPerCategoryComponent implements OnInit {
  private _category!: CategoryView;

  get category() {
    return this._category;
  }

  @Input()
  set category(category: CategoryView) {
    this._category = category;
    this.loadData();
  }

  list: Array<number> | null = null;

  constructor() { }

  ngOnInit(): void { }

  loadData() {
    this.category.isLoading = true;
    this.list = new Array<number>();
    for (let i = 0; i < 6; i++) {
      this.list.push(i);
    }
    this.category.isLoading = false;
  }
}
