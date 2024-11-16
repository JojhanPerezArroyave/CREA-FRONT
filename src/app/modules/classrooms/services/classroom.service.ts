// nombre-del-servicio.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClassroomModel } from '../models/classrooms.model';

@Injectable({
  providedIn: 'root',
})
export class GetClassroomService {
  private readonly http = inject(HttpClient)

  getClassrooms(): Observable<ClassroomModel> {
    return this.http.get<ClassroomModel>(`${environment.API_URL}/classrooms`); 
  }
}
