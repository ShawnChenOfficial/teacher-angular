import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ToastEventType } from 'src/app/common/models/toast';
import { ModalService } from 'src/app/common/services/modal.service';
import { ToastService } from 'src/app/common/services/toast.service';
import { PostModalComponent } from 'src/app/core/shared/components/post-modal/post-modal.component';
import { PostView } from 'src/app/core/home/models/views/post';
import { PostService } from 'src/app/core/shared/services/post.sevice';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.scss']
})
export class UserPostComponent implements OnInit, OnChanges {

  items: Array<PostView>;

  @Input('categoryId')
  categoryId: number;

  constructor(private postService: PostService, private toastService: ToastService, private modalService: ModalService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['categoryId'] && this.categoryId) {
      this.loadPosts();
    }
  }

  ngOnInit(): void {
  }


  loadPosts() {
    this.postService.getPostsByCategory(this.categoryId).subscribe({
      next: res => {
        this.items = res.map(m => new PostView(m));
      },
      error: err => {
        this.toastService.show('Error', err, ToastEventType.Error);
      }
    })
  }

  createOrUpdate(view?: PostView) {
    this.modalService.open(PostModalComponent, view).subscribe(s => {
      if (s != null) {
        this.loadPosts();
      }
    });
  }

}
