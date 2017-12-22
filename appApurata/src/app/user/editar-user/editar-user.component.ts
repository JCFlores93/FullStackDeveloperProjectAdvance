import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router'
import { UsersService } from '../users.service'
import { User } from '../user'
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { query } from '@angular/core/src/animation/dsl';

interface canDeactivateComponent {
  canDeactivateComponent:() => boolean
}
@Component({
  selector: 'app-editar-user',
  templateUrl: './editar-user.component.html',
  styleUrls: ['./editar-user.component.css']
})
export class EditarUserComponent implements OnInit, canDeactivateComponent {

  canDeactivateComponent(): boolean {
	  return this.verificarIgualdad(this.userOriginal, this.user)
  }
  id: number
  user: User
  userOriginal: User
  permitir: boolean
  fragmento: string = ""

  constructor(private userService: UsersService, private rutaActiva: ActivatedRoute, private ruteador: Router) { }

verificarIgualdad(original: User, actual: User):boolean {
	for(let propiedad in original) {
		if(original[propiedad] != actual[propiedad]){
			return true
		}
	} 
  return false
}

  ngOnInit() {
	  //Params in the URL
	  this.id = this.rutaActiva.snapshot.params.id

	  const user:User = this.userService.usersDetail("" + this.id)
	  this.user = user
	  this.userOriginal = Object.assign({}, user, {})
	  this.rutaActiva.params
		.subscribe(
			(parametros: Params) => {
				this.id = parametros["id"]
				const user:User = 
				this.userService.usersDetail(""+this.id)
				this.user = user
				this.userOriginal = Object.assign({}, user, {})
			}
		)

	//Params of QueryString
	if(this.rutaActiva.snapshot.queryParams.permitir === "true"){
		this.permitir = true
	}else {
		this.permitir = false
	}

	this.rutaActiva.queryParams
		.subscribe(
			(queryParams: Params) => {
				if(queryParams["permitir"] === "true"){
					this.permitir = true
				}else {
					this.permitir = false
				}
			}
		)

	//parms of fragment 
	this.fragmento = this.rutaActiva.snapshot.fragment
	console.log("Fragmento", this.fragmento)

	this.rutaActiva.fragment
		.subscribe(
			fragmento => {
				this.fragmento = fragmento
				console.log("Fragmento suscripcion", this.fragmento)
			}
		)

  }


  grabar(f: NgForm){
	  this.userService.saveUser(this.user)
	  this.ruteador.navigate(["users"])
  }

  editar(id:number){
	this.ruteador.navigate(["users","editar",id], 
	{queryParamsHandling: "preserve"})
  }

}
