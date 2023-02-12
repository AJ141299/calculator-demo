import { Component } from '@angular/core';
import { InputButton } from './input-button/input-button.component';

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
      color: 'hotpink',
    },
    {
      text: '%',
      color: 'hotpink',
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
      color: 'lightgreen',
    },
    {
      text: '0',
    },
    {
      text: '.',
    },
    {
      text: '=',
      color: 'lightgreen',
    },
  ];
  outputs: string[] = [];

  buttonClicked(event: any) {
    console.log(this.outputs);
    const lastValue = this.outputs.at(this.outputs.length - 1);

    switch (event) {
      case 'AC': {
        this.outputs = [];
        return;
      }
      case 'C': {
        this.outputs.pop();
        return;
      }
      case '=': {
        // pop if last value is operator
        if (lastValue) {
          if (this.isOperator(lastValue!)) {
            this.outputs.pop();
          }

          this.outputs = [this.performCalculation(this.outputs)];
        }
        return;
      }
    }

    if (this.isOperator(event)) {
      if (this.outputs.length == 0) {
        return;
      }

      if (this.isOperator(lastValue!)) {
        this.outputs.pop();
      }

      this.outputs.push(event);
      return;
    }

    if (lastValue && !this.isOperator(lastValue!)) {
      this.outputs.pop();
      event = lastValue + event;
    }

    this.outputs.push(event);
  }

  performCalculation(inputs: string[]): string {
    let total = Number(inputs[0]);

    for (let i = 0; i < inputs.length; i++) {
      const value = inputs[i];
      if (this.isOperator(value)) {
        total = this.calculate(total, Number(inputs[i + 1]), value);
        i++;
      }
    }

    return String(total);
  }

  calculate(value1: number, value2: number, operator: string): number {
    switch (operator) {
      case '+': {
        return value1 + value2;
      }
      case '-': {
        return value1 - value2;
      }
      case '*': {
        return value1 * value2;
      }
      case '÷': {
        return value1 / value2;
      }
      case '^': {
        return Math.pow(value1, value2);
      }
      default: {
        return value1 % value2;
      }
    }
  }

  isOperator(value: string): boolean {
    return isNaN(Number(value));
  }
}
