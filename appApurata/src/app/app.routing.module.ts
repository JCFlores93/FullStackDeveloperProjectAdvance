import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './user/listado/listado.component';
import { EditarUserComponent } from './user/editar-user/editar-user.component';
import { DetalleUserComponent } from './user/detalle-user/detalle-user.component';


const rutas : Routes = [
  {
    path: "", component: HomeComponent, pathMatch:"full"
  },
  {
    path: "users", component:ListadoComponent,children:[
      {path: "detalle/:id", component: DetalleUserComponent},
      {path: "editar/:id", component: EditarUserComponent}
    ]
  }
  
]

@NgModule({
  declarations:[
    HomeComponent,
    ListadoComponent,
    DetalleUserComponent,
    EditarUserComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
