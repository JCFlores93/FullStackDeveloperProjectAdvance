import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacionGuard } from '../auth/autenticacion.guard';
import { ListadoComponent } from './listado/listado.component';
import { DetalleUserComponent } from './detalle-user/detalle-user.component';
import { EditarUserComponent } from './editar-user/editar-user.component';
import { AutorizacionGuard } from '../auth/autorizacion.guard';
import { GuardadoGuard } from '../auth/guardado.guard';

const routes: Routes = [
    {
        path: "users",
        canActivate:[AutenticacionGuard],canActivateChild :[AutenticacionGuard], children:[
          {path: "", component: ListadoComponent},
          {path: "detalle/:id", component: DetalleUserComponent},
          {path: "editar/:id", component: EditarUserComponent, canActivate:[AutorizacionGuard], canDeactivate:[GuardadoGuard]}
        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
