import { Component, Input } from '@angular/core';

@Component({
  selector: 'output-display',
  templateUrl: './output-display.component.html',
  styleUrls: ['./output-display.component.scss'],
})
export class OutputDisplayComponent {
  @Input() displayData: string[] = [];
}
