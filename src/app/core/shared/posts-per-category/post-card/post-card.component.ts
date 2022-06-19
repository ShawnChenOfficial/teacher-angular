import { Component, Input, OnInit } from '@angular/core';
import { CategoryView } from 'src/app/core/home/categories/models/views/category';
import { CategoryService } from 'src/app/core/home/categories/services/category.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input()
  category!: CategoryView;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
