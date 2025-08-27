import { Component, Input } from '@angular/core';
import { SHARED_IMPORTS } from '../../shared-imports';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() message: string = 'This is an alert.';
  @Input() type: string = 'info';
}
