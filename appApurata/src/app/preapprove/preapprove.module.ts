import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreapproveRoutingModule } from './preapprove-routing.module';
import { DetallePreApproveComponent } from './detalle-pre-approve/detalle-pre-approve.component';
import { ListadoPreApproveComponent } from './listado-pre-approve/listado-pre-approve.component';

@NgModule({
  imports: [
    CommonModule,
    PreapproveRoutingModule
  ],
  declarations: [
    ListadoPreApproveComponent,
    DetallePreApproveComponent
  ]
})
export class PreapproveModule { }
