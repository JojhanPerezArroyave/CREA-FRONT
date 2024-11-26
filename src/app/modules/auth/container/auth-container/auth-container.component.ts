import { Component } from '@angular/core';
import { AuthFormComponent } from '../../ui/auth-form/auth-form.component';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
  standalone: true,
  imports: [AuthFormComponent],
})
export class AuthContainer {}
