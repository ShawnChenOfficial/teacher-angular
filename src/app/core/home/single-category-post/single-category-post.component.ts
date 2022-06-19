import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryView } from '../categories/models/views/category';

@Component({
  selector: 'app-single-category-post',
  templateUrl: './single-category-post.component.html',
  styleUrls: ['./single-category-post.component.scss']
})
export class SingleCategoryPostComponent implements OnInit {

  @Input()
  category!: CategoryView;

  constructor() { 
  }

  ngOnInit(): void {
  }

  get isLoading(){
   return this.category.isLoading;
  }

}
