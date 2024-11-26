import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonNote,
  IonButton,
} from '@ionic/angular/standalone';

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
    IonLabel,
    IonItem,
    IonTitle,
    IonContent,
    IonToolbar,
    IonHeader,
  ],
})
export class AuthFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly navCtrl = inject(NavController);

  form = this.fb.group({
    email: this.fb.nonNullable.control(''),
    password: this.fb.nonNullable.control(''),
  });

  onLogin() {
    this.navCtrl.navigateForward('/home');
  }
}
