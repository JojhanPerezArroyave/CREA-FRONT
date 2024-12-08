import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthModel } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = `${environment.API_URL}/auth`;

  login(authData: AuthModel) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    const body = new URLSearchParams();
    body.set('email', authData.email);
    body.set('password', authData.password);

    return this.http.post<AuthModel>(`${this.apiUrl}/login`, body.toString(), {
      headers,
    });
  }
}
