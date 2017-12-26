import { Injectable } from '@angular/core';
import { User } from './user';
import { routeApi } from '../constantes' 
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer'

@Injectable()
export class UsersService {
	users: User[] = [
		new User("1", 'jean carlo', 'flores carrasco',"jean@apurata.com","","","","",'',"", 'admin'),
		new User("2", 'anthony', 'flores carrasco', 'tony@apurata.com',"","","","",'',"",  'user'),
		new User("3", 'nalia', 'pascual guevara', 'nalia@apurata.com' ,"","","","",'',"", 'user'),
		new User("4", 'nancy', 'carrasco luna', 'nancy@apurata.com',"","","","",'',"",  'user'),
		new User("5", 'nicole', 'becerra mean', 'nico@apurata.com',"","","","",'',"",  'user'),
	]
	constructor(private http: HttpClient) { }

	getUsers(): Array<User> {
		return this.users.slice()
	}
	getUsersObservable(): Observable<User[]> {

		return this.http.get<User[]>(`${routeApi}/user`,
			{
				observe: "body", 
				responseType: "json"
				}
			)
	}
    getUserObservable(id: string) :Observable<User>{
        return this.http.get<User>(`${routeApi}/user/${id}`,
        {
            observe: "body",
            responseType: "json"
        })
    }
	saveUser(user: User) {
		console.log(user)
		this.users.forEach(item => {
			if (item.id === user.id) {
				item.first_name = user.first_name
				item.last_name = user.last_name
				item.email = user.email
				item.role = user.role
			}
		})
		console.log(this.users)
	}
	usersDetail(id: string): User{
		console.log("users.service" + id)
        let user: User
        console.log("usersDetail " + this.users)
		this.users.forEach(item => {
            console.log("tipo de usuario " + item.id + "  ")
		if(item.id == id ) user = new User(item.id, item.first_name, item.last_name, item.email,"","","","","","", item.role)	
		})
		return user
	}
	deleteUser(id: string): Observable<User>{
		return this.http.delete<User>(`${routeApi}/user/${id}`,
		{
			observe: "body", 
			responseType: "json"
            })
        }
            
    updateUser(user: User): Observable<User>{
        return this.http.put<User>(`${routeApi}/user/${user.id}`,user,
        {
            observe: "body",
            responseType: "json"
        })
    }




}
