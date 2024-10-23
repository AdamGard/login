import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
  constructor(public authService: AuthService, private router: Router) {}

  // Función que se ejecuta cuando se presiona el botón de cerrar sesión
  logout() {
    this.authService.logout();
    this.router.navigate(['./login']);
  }
}
