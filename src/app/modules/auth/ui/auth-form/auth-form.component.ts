import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonNote,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AuthModel } from '../../models/auth.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonButton,
    IonNote,
    IonInput,
    IonItem,
    IonTitle,
    IonContent,
    IonToolbar,
    IonHeader,
  ],
})
export class AuthFormComponent {
  @Output() sendLoginForm = new EventEmitter<AuthModel>();
  private readonly fb = inject(FormBuilder);

  constructor(private router: Router,) {}

  form = this.fb.group({
    email: this.fb.nonNullable.control(''),
    password: this.fb.nonNullable.control(''),
  });

  onLogin() {
    const authData = this.form.value;
    this.sendLoginForm.emit(authData as AuthModel);
  }

  navigateToClassrooms() {
    this.router.navigate(['/home']);
  }
}
