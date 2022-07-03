import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { SearchEvent, SearchResult, SearchResultable } from '../../models/search-result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchResultComponent implements AfterViewInit {

  focus = false;
  searchTerm: string;
  searchResult: Array<SearchResult> = new Array<SearchResult>();

  @ViewChild('searchInput')
  el: ElementRef;

  @Output('searchFn')
  searchFn: EventEmitter<any> = new EventEmitter<any>();

  @Output('setSource')
  setSource: EventEmitter<any> = new EventEmitter<any>();

  @Output('clearSource')
  clearSource: EventEmitter<any> = new EventEmitter<any>();

  // width of search result list
  width: number;

  @Input('show-sub')
  showSub: boolean = false;

  constructor(private thisElement: ElementRef) { }

  ngAfterViewInit(): void {
    this.onResize();
  }

  // start search, call the search func which defind in parent component
  search() {
    this.searchFn.emit(new SearchEvent(
      (res: SearchResultable[]) => {
        this.searchResult = res.map(r => r.toSearchResult())
      },
      this.searchTerm
    ));
  }

  // when select a result, should set the source from parent component
  selectResult(result: SearchResult) {
    this.focus = false;
    this.setSource.emit(new SearchEvent(
      (res: any) => {
        this.searchTerm = res
      },
      result.source
    ));
  }

  // if user removes the search content, should set the source from parent component to be null
  checkSearchTerm() {
    if (!this.searchTerm)
      this.clearSource.emit();
  }

  // when not focus on this component, close the search result list
  @HostListener('document:click', ['$event'])
  focusOut(event: any) {
    if (
      this.thisElement.nativeElement.contains(event.target)
    ) {
      this.focus = true;
    } else {
      this.focus = false;
    }
  }

  // when resize change the search result to be same width with input
  @HostListener('window:resize')
  onResize() {
    this.width = this.el.nativeElement.clientWidth;
  }
}
