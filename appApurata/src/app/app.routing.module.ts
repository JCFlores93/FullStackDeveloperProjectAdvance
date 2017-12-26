import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes, PreloadAllModules } from '@angular/router'
import { HomeComponent } from './nucleo/home/home.component';
import { ListadoComponent } from './user/listado/listado.component';
import { EditarUserComponent } from './user/editar-user/editar-user.component';
import { DetalleUserComponent } from './user/detalle-user/detalle-user.component';
import { AutenticacionGuard } from './auth/autenticacion.guard';
import { AutorizacionGuard } from './auth/autorizacion.guard';
import { GuardadoGuard } from './auth/guardado.guard';


const rutas : Routes = [
  {
    path: "", component: HomeComponent, pathMatch:"full"
  },
  {
    path: "users",
    canActivate:[AutenticacionGuard],canActivateChild :[AutenticacionGuard], children:[
      {path: "", component: ListadoComponent},
      {path: "detalle/:id", component: DetalleUserComponent},
      {path: "editar/:id", component: EditarUserComponent, canActivate:[AutorizacionGuard], canDeactivate:[GuardadoGuard]}
    ]
  }
  
]

@NgModule({
  declarations:[
    ListadoComponent,
    DetalleUserComponent,
    EditarUserComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forRoot(rutas, { preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AutenticacionGuard,
    AutorizacionGuard,
    GuardadoGuard
  ]
})
export class AppRoutingModule { }
