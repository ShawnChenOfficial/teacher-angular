import { Component, OnInit } from '@angular/core';
import { PostByCategory } from 'src/app/core/home/models/get/post';
import { CategoryView } from '../../../models/views/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.scss'],
})
export class LatestPostsComponent implements OnInit {

  categories: Array<CategoryView> = [];
  isLoading = false;
  posts: Array<PostByCategory>;

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
