import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detalle-user',
  templateUrl: './detalle-user.component.html',
  styleUrls: ['./detalle-user.component.css']
})
export class DetalleUserComponent implements OnInit {

  id:number
  user: User

  constructor(private rutaActiva: ActivatedRoute, private userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params.id
    console.log("detalle-user" + this.id)
    this.user = this.userService.usersDetail(""+this.id)
    this.rutaActiva.params
      .subscribe(
        (parametros: Params) => {
          this.id = parametros["id"]
          console.log("id" + this.id)
          this.user = this.userService.usersDetail(""+this.id)
        }
      )
  }

  cargar(id: number){
    this.router.navigate(["users","detalle",this.id])
  }

  editar(){
    this.router.navigate(["users","editar",this.id], {queryParams: { permitir: false, eliminar: false}, fragment:"autenticado"})
  }
}
