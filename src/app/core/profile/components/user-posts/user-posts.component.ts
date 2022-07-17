import { Component, OnInit } from '@angular/core';
import { DropdownOption } from 'src/app/common/models/dropdown-option';
import { ToastEventType } from 'src/app/common/models/toast';
import { ToastService } from 'src/app/common/services/toast.service';
import { Category } from 'src/app/core/home/models/get/category';
import { PostView } from 'src/app/core/home/models/views/post';
import { CategoryService } from 'src/app/core/home/services/category.service';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  categoryOptions: Array<DropdownOption<Category>>;

  selectedCategoryId: number;

  posts: Array<PostView>;

  constructor(private categoryService: CategoryService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: res => {
        this.categoryOptions = res.map(m => new DropdownOption<Category>(m, m.name));
        this.selectedCategoryId = this.categoryOptions[0].source.id;
      },
      error: err => {
        this.toastService.show('Error', err, ToastEventType.Error);
      }
    })
  }

}
