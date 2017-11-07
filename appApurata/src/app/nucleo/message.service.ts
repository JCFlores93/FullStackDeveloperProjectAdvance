import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {
	private subject = new Subject<any>();

	constructor() { }

	sendMessage(message: boolean) {
        this.subject.next({ text: message });
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<boolean> {
        return this.subject.asObservable();
    }

}
