import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SearchResult } from '../../models/search-result';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
  focus = false;

  @Input('search-result')
  searchResult: Array<SearchResult> = new Array<SearchResult>();

  @Input('input-element')
  input: HTMLInputElement;

  @Output('setSource')
  setSource: EventEmitter<any> = new EventEmitter<any>();

  width: number;

  constructor(private thisElement: ElementRef) {}

  ngOnInit(): void {
    if (!this.input) throw 'Missing input element';
    this.onResize();
  }

  selectResult(result: SearchResult) {
    this.focus = false;
    this.setSource.emit(result.source);
  }

  @HostListener('document:click', ['$event'])
  focusOut(event: any) {
    if (
      this.thisElement.nativeElement.contains(event.target) ||
      this.input.contains(event.target)
    ) {
      this.focus = true;
    } else {
      this.focus = false;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.width = this.input.clientWidth;
  }
}
