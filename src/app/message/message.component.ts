import { Component, OnInit } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {

  }







  /*
  constructor(private http: HttpClient, private route: Router) { }

  sendMessage(value: any) {
    console.log(value)
    this.http.put('http://localhost:8289/message', value).subscribe({
      next: (data) => {
        this.msg = data;
        console.log(data)
        if (this.msg != null) {
          // comande pour afficher le message dans la boitet
        }
        else {


        }
   
      })
    } */

  /* sendMessage(value: any) {
  
  
    return (this.user.contenu);
  } */

} 