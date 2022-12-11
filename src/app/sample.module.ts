import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampleComponent } from './app.component';

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