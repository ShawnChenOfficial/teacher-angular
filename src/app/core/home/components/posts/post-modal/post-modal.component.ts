import { Component, Inject, OnInit } from '@angular/core';
import { ValidatorService } from 'projects/validation/src/services/validator.service';
import { ToastEventType } from 'src/app/common/models/toast';
import { INJECT_DATA } from 'src/app/common/persistance/persistance';
import { ModalService } from 'src/app/common/services/modal.service';
import { ToastService } from 'src/app/common/services/toast.service';
import { PostService } from 'src/app/core/shared/services/post.sevice';
import { PostForm } from '../../../models/form/post';
import { Category } from '../../../models/get/category';
import { CategoryView } from '../../../models/views/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {

  title = 'Create';
  today = new Date();
  form: PostForm = new PostForm();

  categoryOptions = new Array<Category>();

  constructor(private modalService: ModalService,
    private validatorService: ValidatorService,
    private toastService: ToastService,
    private postService: PostService,
    private categoryService: CategoryService,
    @Inject(INJECT_DATA) data: any) {
    if (data instanceof CategoryView) {
      this.form.categoryId = data.id;
    }
    else if (data instanceof PostForm) {
      this.form = data;
    }
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: res => {
        this.categoryOptions = res;
      },
      error: err => {
        this.toastService.show('Failed to save changes', err, ToastEventType.Error);
      }
    });
  }

  close() {
    this.modalService.complete();
  }

  save() {
    if (!this.validatorService.isValid) {
      return
    }

    this.postService.createPost(this.form).subscribe({
      next: res => {
        this.modalService.complete(res);
      }, error: err => {
        this.toastService.show('Failed to save changes', err.error, ToastEventType.Error);
      }
    })


  }
}
