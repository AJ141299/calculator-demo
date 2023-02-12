import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { InputButtonComponent } from './calculator/input-button/input-button.component';
import { OutputDisplayComponent } from './calculator/output-display/output-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    InputButtonComponent,
    OutputDisplayComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
