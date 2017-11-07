import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http'
;
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module'
import { SeguridadService } from './auth/seguridad.service';
import { UsersService } from './user/users.service';
import { NucleoModule } from './nucleo/nucleo.module';
import { MessageService } from './nucleo/message.service'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NucleoModule
  ],
  providers: [SeguridadService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
