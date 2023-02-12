import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface InputButton {
  text: string;
  color?: string;
}

@Component({
  selector: 'input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss'],
})
export class InputButtonComponent {
  @Input() data: InputButton = {
    text: 'AC',
    color: 'white',
  };
  @Output() buttonClick: EventEmitter<string> = new EventEmitter();
}
