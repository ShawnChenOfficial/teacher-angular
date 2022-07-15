import { Component, Input, OnInit } from '@angular/core';
import { CategoryView } from '../../../models/views/category';

@Component({
  selector: 'app-single-category-posts',
  templateUrl: './single-category-posts.component.html',
  styleUrls: ['./single-category-posts.component.scss']
})
export class SingleCategoryPostsComponent implements OnInit {

  @Input()
  category!: CategoryView;

  isLoading = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
