import { Component, inject } from '@angular/core';
import { AuthFormComponent } from '../../ui/auth-form/auth-form.component';
import { AuthModel } from '../../models/auth.models';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-auth-container',
  templateUrl: './auth-container.component.html',
  styleUrls: ['./auth-container.component.scss'],
  standalone: true,
  imports: [AuthFormComponent],
})
export class AuthContainer {
  private readonly authService = inject(AuthService);
  private readonly toastController = inject(ToastController);
  private readonly navCtrl = inject(NavController);

  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  async onLogin(authData: AuthModel) {
    this.authService.login(authData).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          message: 'Inicio de sesión exitoso',
          duration: 2000,
          color: 'success',
          position: 'top',
        });
        await toast.present();
        this.navCtrl.navigateRoot('/home');
      },
      error: async (error) => {
        const toast = await this.toastController.create({
          message: error.error?.Message || 'Error al iniciar sesión',
          duration: 2000,
          color: 'danger',
          position: 'top',
        });
        await toast.present();
      },
    });
  }

}
