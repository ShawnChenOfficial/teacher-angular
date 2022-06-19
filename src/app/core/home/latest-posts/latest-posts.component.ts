import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryView } from '../categories/models/views/category';
import { CategoryService } from '../categories/services/category.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss'],
})
export class LatestPostsComponent implements OnInit {
 
  categories: Array<CategoryView>;
  isLoading = false;

  constructor(private categoryService: CategoryService) {
    this.categories = categoryService.getCategories();
    this.isLoading = true;
    categoryService.startLoadingData().subscribe(s => {
      this.isLoading = false;
    });
  }

  ngOnInit(): void {}
}
