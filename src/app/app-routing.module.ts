import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Modules/home/login/login.component';
import { HomeComponent } from './Modules/home/home/home.component';
import { EmpleadosComponent } from './Modules/empleados/empleados/empleados.component';
import { NuevoComponent } from './Modules/empleados/nuevo/nuevo.component';
import { CargaMasivaComponent } from './Modules/empleados/carga-masiva/carga-masiva.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/empleados', component: EmpleadosComponent },
  { path: 'home/nuevo-empleado', component: NuevoComponent },
  { path: 'home/carga-masiva', component: CargaMasivaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }