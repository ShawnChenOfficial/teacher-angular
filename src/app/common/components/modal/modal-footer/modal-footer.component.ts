import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.scss']
})
export class ModalFooterComponent implements OnInit {

  @Output('save')
  saveEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output('remove')
  removeEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output('close')
  closeEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  get toRemove() {
    return this.removeEvent.observers.length > 0;
  }

  get toClose() {
    return this.closeEvent.observers.length > 0;
  }

  get toSave() {
    return this.saveEvent.observers.length > 0;
  }

  save() {
    this.saveEvent.emit();
  }

  remove() {
    this.removeEvent.emit();
  }

  close() {
    this.closeEvent.emit();
  }

}
