import { HttpParams } from '@angular/common/http';

export class SearchQuery {
  term?: string;

  constructor(term: string | undefined = undefined) {
    this.term = term;
  }

  params() {
    let params = new HttpParams();
    if (this.term) params = params.set('term', this.term);
    return params;
  }
}
