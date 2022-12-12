import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  @Input()
  label: string = '';
}
