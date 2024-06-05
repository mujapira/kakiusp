import { Injectable } from '@angular/core';
import { Observable, catchError, from, map } from 'rxjs';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { userModel } from '../models/userModel';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../../interfaces/tokenInterface';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  constructor(private cookieService: CookieService, private router: Router) {}

  login(login: string, password: string): Observable<void> {
    return from(axios.get(`${this.apiUrl}/auth/${login}/${password}`)).pipe(
      map((response) => {
        if (!response.data) {
          //!response.data == "" -> usuário não encontrado.
          throw 'Usuário e/ou senha incorretos.';
        }
        const token = response.data;
        this.cookieService.set('auth_token', token, undefined, '/');
      }),
      catchError((error) => {
        throw 'Erro na autenticação. Tente novamente mais tarde.';
      })
    );
  }

  isAuthenticated(): boolean {
    const token = this.getToken('auth_token');
    return !!token;
  }

  getUser(): userModel {
    var token = jwtDecode(this.getToken('auth_token')) as JwtPayload;

    var user: userModel = {} as userModel;
    user.email = token.email;
    user.name = token.name;
    user.role = token.role;

    return user;
  }

  getToken(name: string): string {
    return this.cookieService.get(name);
  }

  logoutUser(): void {
    this.cookieService.delete('auth_token', '/');
    this.router.navigate(['/login']);
  }
}
