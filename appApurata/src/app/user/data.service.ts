import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
	
	private subject = new Subject

 	constructor() { }

	 sendMessage(message: string){
		 this.subject.next({ text: message})
	 }

	 clearMessage(){
		 this.subject.next()
	 }

	 getMessage(): Observable<any>{
		 return this.subject.asObservable()
	 }
}
