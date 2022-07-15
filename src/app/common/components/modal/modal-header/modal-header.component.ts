import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent implements OnInit {

  constructor() { }

  @Input()
  title: string = '';

  @Output('close')
  closeEvent: EventEmitter<any> = new EventEmitter<any>()

  ngOnInit(): void {
  }

  close() {
    this.closeEvent.emit();
  }
}
