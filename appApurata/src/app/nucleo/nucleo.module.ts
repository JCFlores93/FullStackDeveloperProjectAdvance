import { NgModule } from "@angular/core";
import { CabeceraComponent } from "../nucleo/cabecera/cabecera.component";
import { HomeComponent } from "../nucleo/home/home.component";
import { AppRoutingModule } from "../app.routing.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        HomeComponent,
        CabeceraComponent
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        CabeceraComponent,
        AppRoutingModule
    ]
    
})

export class NucleoModule {}