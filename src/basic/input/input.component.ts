import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.sass']
})
export class InputComponent {
  @Input()
  placeholder: string = '';
}
