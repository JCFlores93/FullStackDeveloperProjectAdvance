import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacionGuard } from '../auth/autenticacion.guard';
import { ListadoPreApproveComponent } from './listado-pre-approve/listado-pre-approve.component';
import { DetallePreApproveComponent } from './detalle-pre-approve/detalle-pre-approve.component';

const routes: Routes = [
  {path: "pre-approve", children:[
    {path:"", component: ListadoPreApproveComponent},
    {path: "detalle", component: DetallePreApproveComponent, canActivate:[AutenticacionGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreapproveRoutingModule { }
