import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Usuario } from 'src/app/Interfaces/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent {
  nombre: string = '';
  correo: string = '';
  clave: string = '';
  mensajeExito: string = ''; // Variable para el mensaje de éxito
  mostrarMensaje: boolean = false; // Controla la visibilidad del mensaje

  constructor(private authService: AuthService, private router: Router) {}
  onRegister(): void {
    this.authService.registrarUsuario(this.nombre, this.correo, this.clave).subscribe(
      (usuario: Usuario) => {
        this.mostrarMensaje = true; // Mostrar el mensaje de éxito
        this.mensajeExito = 'Registro exitoso. Serás redirigido al login.';

        // Esperar 3 segundos antes de redirigir al login
        setTimeout(() => {
          this.router.navigate(['/login']); // Navegar a la página de login
        }, 3000); // 3000 milisegundos = 3 segundos
      },
      (error) => {
        console.log('Error en el registro', error);
        // Aquí podrías manejar los errores, como mostrar un mensaje de error
      }
    );
  }
}