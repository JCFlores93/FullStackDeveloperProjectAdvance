import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})


export class CabeceraComponent implements OnInit,OnDestroy {

  message:boolean
  subscription: Subscription
  fecha: Date = new Date()

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(
      message => {
        
        this.message = message;
        console.log("cabecera esto es :" + message)
      }
    )
   }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
