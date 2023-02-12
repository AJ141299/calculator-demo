import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputButton } from '../calculator.component';

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
  @Output() buttonClick = new EventEmitter<string>();
}
