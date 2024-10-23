import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Usuario } from '../Interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticationUrl = environment.AUTHENTICATION + '/Login';
  registrarseUrl = environment.AUTHENTICATION + '/Registrarse';

  constructor(private http: HttpClient) {}

  registrarUsuario(nombre: string, correo: string, clave: string) : Observable<Usuario>{
    return this.http.post<Usuario>(this.registrarseUrl, { nombre, correo, clave });
  }
  
  login(correo: string, clave: string): Observable<Usuario> {
    return this.http.post<Usuario>(this.authenticationUrl, { correo, clave });
  }

  setToken(token: string): void {
    localStorage.setItem('JwtToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('JwtToken');
  }

  logout(): void {
    localStorage.removeItem('JwtToken');
  }
}
