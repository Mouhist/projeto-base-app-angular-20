import { Component } from '@angular/core';
import { SHARED_IMPORTS } from './shared/shared-imports';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SHARED_IMPORTS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MINDFLOW-APP';
}
