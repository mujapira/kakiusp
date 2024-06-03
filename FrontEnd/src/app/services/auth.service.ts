import { Injectable } from '@angular/core';
import { Observable, catchError, from, map } from 'rxjs';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'https://localhost:7086';
  constructor(private cookieService: CookieService) {}

  login(login: string, password: string): Observable<void> {
    return from(axios.get(`${this.apiUrl}/auth/${login}/${password}`)).pipe(
      map((response) => {
        const token = response.data;
        this.cookieService.set('auth_token', token);
      }),
      catchError((error) => {
        throw new Error(error.response?.data || 'Erro na autenticação');
      })
    );
  }

  isAuthenticated(): boolean {
    const token = this.getTokenFromCookies();
    return !!token;
  }

  private getTokenFromCookies(): string {
    return this.cookieService.get('auth_token');
  }
}
