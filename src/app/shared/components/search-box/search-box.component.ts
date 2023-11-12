import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {

  @Input() placeholder: string = '';
  
  @Output() onValue: EventEmitter<string> = new EventEmitter();

  onKeyPress( value: string ) {
    this.onValue.emit(value);
  }

}
