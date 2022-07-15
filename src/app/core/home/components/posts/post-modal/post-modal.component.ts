import { Component, Inject, OnInit } from '@angular/core';
import { ValidatorService } from 'projects/validation/src/services/validator.service';
import { INJECT_DATA } from 'src/app/common/persistance/persistance';
import { ModalService } from 'src/app/common/services/modal.service';
import { PostForm } from '../../../models/form/post';
import { CategoryView } from '../../../models/views/category';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {

  title = 'Create';
  today = new Date();
  form: PostForm = new PostForm();

  constructor(private modalService: ModalService,
    private validatorService: ValidatorService,
    @Inject(INJECT_DATA) data: any) {
    if (data instanceof CategoryView) {
      this.form.categoryId = data.id;
    }
    else if (data instanceof PostForm) {
      this.form = data;
    }
  }

  ngOnInit(): void {
  }

  close() {
    this.modalService.complete();
  }

  save() {
    if (!this.validatorService.isValid) {
      return
    }

    this.modalService.complete('');
  }
}
