import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UsersService {
	users: Array<User> = [
		new User(1, 'jean carlo', 'flores carrasco','jean@apurata.com','admin'),
		new User(2, 'anthony', 'flores carrasco','tony@apurata.com','user'),
		new User(3, 'nalia', 'pascual guevara','nalia@apurata.com','user'),
		new User(4, 'nancy', 'carrasco luna','nancy@apurata.com','user'),
		new User(5, 'nicole', 'becerra mean','nico@apurata.com','user'),
	]
  constructor() { }

  getUsers(): Array<User>{
	  return this.users.slice()
  }

  saveUser(user: User){
	console.log(user)
		this.users.forEach(item => {
			if(item.id === user.id) {
				item.nombe = user.nombe
				item.apellido = user.apellido
				item.email = user.email
				item.role = user.role
			}
		})
	console.log(this.users)
  	}



}
