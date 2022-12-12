import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './basic/button/button.component';
import { InputComponent } from './basic/input/input.component';
import { LoginForm } from "./forms/login-form/login-form.component";

@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    LoginForm
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    InputComponent,
    LoginForm
  ],
})
export class SampleModule { }