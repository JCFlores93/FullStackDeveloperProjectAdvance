import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { AppRoutingModule } from './app.routing.module'
import { SeguridadService } from './auth/seguridad.service';
import { UsersService } from './user/users.service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsersService,SeguridadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
