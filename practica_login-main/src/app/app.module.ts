import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http'; // Importar el módulo HttpClient
import { ProductosService } from './Services/productos.service';
import { ProductosComponent } from './Components/productos/productos.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Interceptors/auth.interceptor';
import { RegistrarseComponent } from './Components/registrarse/registrarse.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    ProductosComponent,
    RegistrarseComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ], // Importar el módulo HttpClient
  providers: [
    ProductosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
