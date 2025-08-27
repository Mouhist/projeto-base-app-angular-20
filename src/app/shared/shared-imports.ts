import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { AlertComponent } from './components/alert/alert.component';

export const SHARED_IMPORTS = [
  CommonModule,
  RouterOutlet,
  ButtonComponent,
  AlertComponent
];
