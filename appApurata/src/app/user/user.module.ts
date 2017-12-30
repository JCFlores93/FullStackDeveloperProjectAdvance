import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';
import { EditarUserComponent } from './editar-user/editar-user.component';
import { DetalleUserComponent } from './detalle-user/detalle-user.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
      ListadoComponent, 
      EditarUserComponent, 
      DetalleUserComponent
    ]
})
export class UserModule { }
