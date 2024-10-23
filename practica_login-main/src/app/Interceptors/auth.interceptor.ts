import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Obtener el token del servicio de autenticación
    const token = this.authService.getToken();

    // Si el token existe, añadirlo a la cabecera de la petición
    if (token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });

      // Devolver la petición clonada
      return next.handle(cloned);
    }
    // Si no existe, devolver la petición original
    return next.handle(request);
  }
}
