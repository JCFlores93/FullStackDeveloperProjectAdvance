import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule,  HTTP_INTERCEPTORS} from '@angular/common/http'
;
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module'
import { SeguridadService } from './auth/seguridad.service';
import { UsersService } from './user/users.service';
import { NucleoModule } from './nucleo/nucleo.module';
import { MessageService } from './nucleo/message.service';
import { ListadoPreApproveComponent } from './preapprove/listado-pre-approve/listado-pre-approve.component';
import { DetallePreApproveComponent } from './preapprove/detalle-pre-approve/detalle-pre-approve.component'
import { DataService } from './user/data.service';
//import { RequestDataService } from './user/request-data.service';
import { AppInterceptor } from './app.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NucleoModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true},
    SeguridadService, MessageService, UsersService,DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
