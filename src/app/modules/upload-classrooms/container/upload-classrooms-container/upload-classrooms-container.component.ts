import { Component } from '@angular/core';
import {
  IonButton,
  ToastController,
  NavController,
} from '@ionic/angular/standalone';
import { UploadClassroomsService } from '../../services/upload-classrooms.service';
@Component({
  selector: 'app-upload-classrooms-container',
  templateUrl: './upload-classrooms-container.component.html',
  standalone: true,
  imports: [IonButton],
  styleUrls: ['./upload-classrooms-container.component.scss'],
})
export class UploadClassroomsContainerComponent {
  uploadedFile: File | null = null;

  constructor(
    private readonly uploadClassroomsService: UploadClassroomsService,
    private readonly toastController: ToastController,
    private readonly navCtrl: NavController
  ) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      this.uploadedFile = file;
    }
  }

  sendFile() {
    if (this.uploadedFile) {
      this.uploadClassroomsService.uploadFile(this.uploadedFile).subscribe({
        next: async () => {
          const toast = await this.toastController.create({
            message: 'Aulas cargadas correctamente',
            duration: 2000,
            color: 'success',
            position: 'top',
          });
          await toast.present();
          this.navCtrl.navigateRoot('/home');
        },
        error: async (error) => {
          console.log(error);
          const toast = await this.toastController.create({
            message: error.error?.Message || 'Error al cargar las aulas',
            duration: 2000,
            color: 'danger',
            position: 'top',
          });
          await toast.present();
        },
      });
    }
  }
}
