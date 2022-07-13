import { Injectable } from '@angular/core';
import { HttpService } from 'projects/auth/src/services/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastEventType } from 'src/app/common/models/toast';
import { ToastService } from 'src/app/common/services/toast.service';
import { environment } from 'src/environments/environment';
import { Category } from '../models/get/category';
import { CategoryView } from '../models/views/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories: Array<CategoryView>;

  constructor(private http: HttpService, private toastService: ToastService) {
  }

  getCategories() {
    return new Observable<CategoryView[]>(sub => {
      if (this.categories == undefined) {
        this.loadCategories().subscribe({
          next: res => {
            if (res.length > 0) {
              this.categories = res.map(m => new CategoryView(m));
            }
            else {
              this.categories = [];
            }
            sub.next(this.categories);
          }, error: err => {
            this.toastService.show('Failed to load categories', err, ToastEventType.Error);
            sub.next([]);
          }
        });
      }
      else {
        sub.next(this.categories);
      }
    })
  }

  loadCategories() {
    return this.http.get<Array<any>>(environment.baseEndPoint + '/api/category').pipe(map(m => m.map(r => new Category(r))));
  }
}
