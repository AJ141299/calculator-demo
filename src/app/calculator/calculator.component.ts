import { Component } from '@angular/core';

export interface InputButton {
  text: string;
  color?: string;
}

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  inputs: InputButton[] = [
    {
      text: 'AC',
      color: 'lightgreen',
    },
    {
      text: '^',
      color: 'lightgreen',
    },
    {
      text: '%',
      color: 'lightgreen',
    },
    {
      text: '÷',
      color: 'hotpink',
    },
    {
      text: '7',
    },
    {
      text: '8',
    },
    {
      text: '9',
    },
    {
      text: '*',
      color: 'hotpink',
    },
    {
      text: '4',
    },
    {
      text: '5',
    },
    {
      text: '6',
    },
    {
      text: '-',
      color: 'hotpink',
    },
    {
      text: '1',
    },
    {
      text: '2',
    },
    {
      text: '3',
    },
    {
      text: '+',
      color: 'hotpink',
    },
    {
      text: 'C',
    },
    {
      text: '0',
    },
    {
      text: '.',
    },
    {
      text: '=',
      color: 'hotpink',
    },
  ];

  buttonClicked(event: any) {
    console.log(event);
  }
}
