import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonNote,
  IonInput,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonLabel,
    IonInput,
    IonNote,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class AuthComponent {
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
