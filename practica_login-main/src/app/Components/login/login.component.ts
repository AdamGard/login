import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importar lo necesario para formularios reactivos
import { Router } from '@angular/router'; // Importar el servicio Router
import { AuthService } from 'src/app/Services/auth.service'; // Importar el servicio AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null; // Variable para almacenar el mensaje de error

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    // Crear el formulario utilizando FormBuilder
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]], // Validaciones para el campo correo
      clave: ['', [Validators.required, Validators.minLength(3)]], // Validaciones para la clave
    });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  // Función que se ejecuta cuando se envía el formulario
  onSubmit() {
    if (this.loginForm.valid) {
      const { correo, clave } = this.loginForm.value;

      // Llamar al método login del AuthService
      this.authService.login(correo, clave).subscribe(
        (response) => {
          if (response?.token) {
            // Usar encadenamiento opcional para verificar el token
            // Guardar el token usando el método setToken
            this.authService.setToken(response.token);
            console.log('Inicio de sesión exitoso, token guardado');

            // Redirigir al usuario a la página de inicio
            this.router.navigate(['./inicio']);
          } else {
            // Mostrar mensaje de error si el token no está presente
            this.errorMessage =
              'Credenciales incorrectas. Por favor, intente nuevamente.';
          }
        },
        (error) => {
          // Manejar error de autenticación
          console.error('Error al autenticar', error);
          this.errorMessage =
            'Ocurrió un error al intentar iniciar sesión. Por favor, intente nuevamente.';
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
