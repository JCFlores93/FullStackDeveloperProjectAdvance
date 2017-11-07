import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../../auth/seguridad.service'
import { MessageService } from '../message.service'
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	username: string
	password: string
	usuarioLogueado: boolean

	constructor(private seguridadService: SeguridadService,private messageService: MessageService) { }

	ngOnInit() {
		this.usuarioLogueado = 
		this.seguridadService.estaAutenticado()

		this.seguridadService.cambioEstado
		.subscribe(
		  estado => {
			this.usuarioLogueado = estado
		  }
		)

		this.sendMessage()
	}

	login() {
		this.seguridadService.login(this.username, this.password)
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
