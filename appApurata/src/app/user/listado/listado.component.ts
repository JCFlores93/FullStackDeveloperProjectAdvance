import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  users: User[] 

  constructor(private userServicio:UsersService,
              private ruteador: Router,
              private rutaActiva: ActivatedRoute,
              private dataService: DataService ) { }

  ngOnInit() {
    console.log(this.userServicio.getUsers())
    //this.users = this.userServicio.getUsers()
    this.userServicio.getUsersObservable()
                    .subscribe(
                      (registro: User[]) => {
                        console.log("wtf" + registro)
                        console.log("registro" + JSON.stringify(registro))
                        this.users = registro
                        console.log("users" + this.users)
                      },
                      (error: any) => console.log(error)
                    )
  }

  showDetail(id: string){
    this.dataService.sendMessage('Message')
    console.log("showDetail " + id)
    console.log("ruta Activa" + this.rutaActiva)
 // this.ruteador.navigate(["detalle", id], {relativeTo: this.rutaActiva} )
  this.ruteador.navigate(['detalle',id],{relativeTo:this.rutaActiva}).then(
    nav => { console.log("route successful " + nav)},error => console.log("error " + error)
  )
  console.log("ruta Activada" + this.rutaActiva)
  }

}