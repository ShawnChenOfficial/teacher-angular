import { Component, Input, OnInit } from '@angular/core';
import { ToastEventType } from 'src/app/common/models/toast';
import { ToastService } from 'src/app/common/services/toast.service';
import { CategoryView } from '../../../models/views/category';
import { PostView } from '../../../models/views/post';
import { PostService } from '../../../../shared/services/post.sevice';
import { ModalService } from 'src/app/common/services/modal.service';
import { PostModalComponent } from '../post-modal/post-modal.component';
import { AuthService } from 'projects/auth/src/services/auth.service';

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

  isLoading = false;

  items: Array<PostView> | null = null;

  constructor(private postService: PostService, private toastService: ToastService, private modalService: ModalService, private authService: AuthService) { }

  ngOnInit(): void { }

  loadData() {
    this.isLoading = true;
    this.postService.getPostsByCategory(this.category.id).subscribe({
      next: res => {
        this.items = res.map(m => new PostView(m));
      },
      error: err => {
        this.toastService.show(`Failed to load data for ${this.category.name}`, err, ToastEventType.Error);
      }
    }).add(() => {
      this.isLoading = false;
    });
  }

  create() {
    this.modalService.open(PostModalComponent).subscribe(s => {
      if (s != null) {
        this.loadData();
      }
    });
  }

  get canPost() {
    return this.authService.hasPermission('normal');
  }
}
