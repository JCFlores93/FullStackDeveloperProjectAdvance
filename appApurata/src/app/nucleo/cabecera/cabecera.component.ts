import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../message.service';
import { SeguridadService } from '../../auth/seguridad.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})


export class CabeceraComponent implements OnInit {

  message:boolean
  subscription: Subscription
  fecha: Date = new Date()
  usuarioLogueado: boolean = false

  constructor(private block: SeguridadService) {
   }

  ngOnInit() {
      this.usuarioLogueado = this.block.estaAutenticado()
      this.block.cambioEstado
			.subscribe(
			  estado => {
                this.usuarioLogueado = estado
			  }
			)
  }
}
