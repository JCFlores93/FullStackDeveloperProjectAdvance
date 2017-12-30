import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs/Subscription'
import { DataService } from '../data.service'

@Component({
  selector: 'app-detalle-user',
  templateUrl: './detalle-user.component.html',
  styleUrls: ['./detalle-user.component.css']
})
export class DetalleUserComponent implements OnInit, OnDestroy {

  id: number
  user: User
  message:any
  subscription: Subscription
  title: string = ""
  isDataLoaded:boolean = false
  dataBlocked:boolean = false

  constructor(private rutaActiva: ActivatedRoute, private userService: UsersService, private router: Router, private messageService: DataService) {
    console.log("ruta activa")
	this.subscription = this.messageService.getMessage()
			.subscribe(
				message => {
					this.message = message;
					console.log(message)
				}
			)
   }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id
    console.log("detalle-user" + this.id)
    this.userService.getUserObservable(this.id.toString()).subscribe(
        (registro: User) => {
            console.log("id error" + registro.id)
            console.log("dni" + registro.dni)
            //this.user.dni = registro.dni
            this.user = registro
            this.isDataLoaded = true
            this.title = `${registro.id} - ${registro.first_name} ${registro.last_name}`
        },
        (error: any) => console.log(error)
    )
    /*this.user = this.userService.usersDetail("" + this.id)
    this.rutaActiva.params
      .subscribe(
      (parametros: Params) => {
        this.id = parametros["id"]
        console.log("id" + this.id)
        this.user = this.userService.usersDetail("" + this.id)
      }
	  )*/

  }

  cargar(id: number) {
    this.router.navigate(["users", "detalle", this.id])
  }

  editar() {
    this.router.navigate(["users", "editar", this.id], { queryParams: { permitir: false, eliminar: false }, fragment: "autenticado" })
  }
  ngOnDestroy(): void {
	//clear message 
	this.messageService.clearMessage()
  }
  edit(){
      this.dataBlocked = true
      console.log("edit")
      console.log("dataBlocked " + this.dataBlocked)

  }
  cancelEdit(){
    this.dataBlocked = false
    console.log("cancelEdit")
    console.log("dataBlocked " + this.dataBlocked)
  }

  updateUser(id: string){
      console.log("updateUser-detalle ::::" + JSON.stringify(this.user))
      this.userService.updateUser(this.user)
            .subscribe(
                (registro: User) => {
                    console.log("done" + registro.id)
                },
                (error: any) => console.log(error)

            )
  }
  cancelList(){
      this.dataBlocked = true
      console.log("cancel")
      console.log("ruta activa " + this.rutaActiva)
      this.router.navigate(["users"])      
  }

}
