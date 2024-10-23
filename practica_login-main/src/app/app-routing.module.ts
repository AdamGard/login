import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarseComponent } from './Components/registrarse/registrarse.component';
import { LoginComponent } from './Components/login/login.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { authGuard } from './Guards/auth.guard';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'registrarse',
    component: RegistrarseComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
    canActivate: [authGuard],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
