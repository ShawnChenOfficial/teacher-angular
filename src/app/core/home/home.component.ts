import { Component, OnInit } from '@angular/core';
import { CategoryView } from './categories/models/views/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  selectedCategory: CategoryView | null = null;

  constructor() {}

  ngOnInit(): void {}

  selectCategory(category: CategoryView){
    this.selectedCategory = category;
  }
}
