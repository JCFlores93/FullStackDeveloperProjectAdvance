import { Injectable, EventEmitter } from '@angular/core';
import { Router} from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../user/user';

interface IUsuario {
  id:number, nombre:string, username:string, password:string, rol:string,accessToken:string,
  refreshToken:string
}

@Injectable()
export class SeguridadService {

  private usuarios:Array<IUsuario> = [
    {id:1, nombre: "Jean Carlo Flores Carrasco", username: "jflores", password: "123", rol: "ADMIN",accessToken:"",refreshToken:""},
    {id:2, nombre: "Anónimo", username: "anonimo", password: "456", rol: "OPERADOR",accessToken:"",refreshToken:""}
  ]

  cambioEstado = new EventEmitter<boolean>()
  rutaApi: string = "http://localhost:4000"
  private autenticado:boolean = false

  usuarioEncontrado:Array<IUsuario>

  constructor(private router:Router, private http: HttpClient) {
 
   }

   login(user: IUsuario): void {
     this.http.post<IUsuario>(`${this.rutaApi}/auth/login`, user, {
       observe: "body",
       responseType: "json"
     }).subscribe(
         (user: IUsuario) => {
             localStorage.setItem("accessToken", user.accessToken)
             localStorage.setItem("refreshToken", user.refreshToken)
             this.autenticado = true
             this.cambioEstado.emit(true)
 
             this.router.navigate(["users"])
         },
         (error: any) => {
             this.autenticado = false
         }
     )
   }
  /*login(username:string, password:string){
  	this.usuarioEncontrado = this.usuarios.filter(item => {
  		return item.username.toLowerCase() === username.toLowerCase() &&
  		item.password === password
  	}) 
  	if(this.usuarioEncontrado && this.usuarioEncontrado.length > 0){
  		this.autenticado = true
  		this.cambioEstado.emit(true)
  		this.router.navigate(["users"])
  	}else {
  		this.autenticado = false
  	}
  }*/

  logout(): void {
      this.autenticado = false
      this.cambioEstado.emit(false)
      localStorage.removeItem("token")
      localStorage.removeItem("refreshToken")
      this.router.navigate([""])
  }

  /*logout(){
	  this.autenticado = false
	  this.cambioEstado.emit(false)
  }*/

    estaAutenticado(): boolean{
        return this.autenticado
    }

    getUsers(): Observable<IUsuario[]> {
        return this.http.get<IUsuario[]>(`${this.rutaApi}/auth/listado`, {
            observe: "body",
            responseType: "json"
        })
    }

    getNewToken(refreshToken: string): Observable<string>{
        return this.http.post<string>(`${this.rutaApi}/auth/nuevo-token`, 
            {refreshToken}, {
                observe: "body",
                responseType: "json"
            })
    }
}
