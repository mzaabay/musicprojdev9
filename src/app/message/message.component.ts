import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stomp } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  title = 'WebSocketChatRoom';
  greetings: string[] = [];
  disabled = true;
  newmessage: string | undefined;
  private stompUser = null as any;


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

      }

    })
  } */

  /* sendMessage(value: any) {
  
  
    return (this.user.contenu);
  } */

}