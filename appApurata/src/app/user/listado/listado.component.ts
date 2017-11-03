import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  users: Array<User>

  constructor(private userServicio:UsersService,
              private ruteador: Router,
              private rutaActiva: ActivatedRoute ) { }

  ngOnInit() {
	console.log(this.userServicio.getUsers())
	this.users = this.userServicio.getUsers()
  }

  showDetail(id: number){
	this.ruteador.navigate(["detalle", id], {relativeTo: this.rutaActiva} )
  }

}
