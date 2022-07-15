import { Component, OnInit } from '@angular/core';
import { SearchEvent } from 'src/app/common/models/search-result';

@Component({
  selector: 'app-post-search',
  templateUrl: './post-search.component.html',
  styleUrls: ['./post-search.component.scss']
})
export class PostSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  search($event: SearchEvent) {
    $event.func([]);
  }

  setSearchOption($event: SearchEvent) {
    $event.func('')
  }
}
