import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UploadClassroomsService {
  private readonly http = inject(HttpClient)

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(`${environment.API_URL}/classrooms/classrooms_load_file`, formData);
  }
}
