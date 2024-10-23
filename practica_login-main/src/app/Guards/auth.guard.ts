// auth.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // Obtener una instancia del servicio de autenticación
  const router = inject(Router); // Obtener una instancia del router

  if (authService.getToken()) {
    return true; // Permitir acceso si el token existe
  } else {
    // Redirige al usuario a la página de inicio de sesión
    router.navigate(['/login']);
    return false; // Denegar acceso
  }
};
