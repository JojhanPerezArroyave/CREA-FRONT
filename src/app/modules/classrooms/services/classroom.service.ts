// nombre-del-servicio.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetClassroomService {
  private readonly http = inject(HttpClient)

  getDatos(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}/Classroom`); 
  }
}
