import { Component, OnInit } from '@angular/core';
import { CategoryView } from '../categories/models/views/category';
import { CategoryService } from '../categories/services/category.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss'],
})
export class LatestPostsComponent implements OnInit {

  categories: Array<CategoryView> = [];
  isLoading = false;

  constructor(private categoryService: CategoryService) {
    this.isLoading = true;
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      this.isLoading = false;
    })
  }

  ngOnInit(): void {
  }
}
