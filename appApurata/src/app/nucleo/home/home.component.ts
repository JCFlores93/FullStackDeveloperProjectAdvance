import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../../auth/seguridad.service';
import { MessageService } from '../message.service';

class IUsuario {
  id:number;
  nombre:string;
  username:string;
  password:string;
  rol:string;
  accessToken:string;
  refreshToken:string
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

	username: string
	password: string
	usuarioLogueado: boolean
	user = new IUsuario()

	
	constructor(private seguridadService: SeguridadService,
				private messageService: MessageService,
				) { }

	ngOnInit() {
		this.usuarioLogueado = this.seguridadService.estaAutenticado()
		this.seguridadService.cambioEstado
			.subscribe(
			  estado => {
				this.usuarioLogueado = estado
			  }
			)
		this.sendMessage()
	}

	login() {
		this.user.username = this.username
        this.user.password = this.password
		this.seguridadService.login(this.user)
    } 
    
	logout() {
		this.seguridadService.logout()
	}


	sendMessage(): void {
		// send message to subscribers via observable subject
		//this.messageService.sendMessage('Message from Home Component to App Component!');
		if (this.usuarioLogueado) {
			this.messageService.sendMessage(true);
			console.log(" user login :" + this.usuarioLogueado)
		}else {
			this.messageService.sendMessage(false);
			console.log(" user login: " + this.usuarioLogueado)
		}
		
}

clearMessage(): void {
	// clear message
	this.messageService.clearMessage();
}

}
