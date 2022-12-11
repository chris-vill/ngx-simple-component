import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleComponent } from './app.component';

console.log(NgModule);
console.log(CommonModule);
console.log(SampleComponent);

@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SampleComponent
  ],
})
export class SampleModule { }