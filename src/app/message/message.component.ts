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

  // currentDateTime: number = Date.now();

  constructor() { }

  ngOnInit(): void {
    this.connect();
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }


  connect() {
    const socket = new SockJS('http://localhost:8289/stomp');
    this.stompUser = Stomp.over(socket);
    const _this = this;
    this.stompUser.connect({}, function (frame: string) {
      console.log('Connected: ' + frame);
      _this.stompUser.subscribe('/user/initial', function (hello: { body: string; }) {
        console.log(JSON.parse(hello.body));
        _this.showMessage(JSON.parse(hello.body));
      });
    });
  }
  sendMessage() {
    this.stompUser.send(
      '/app/resume',
      {},
      JSON.stringify(this.newmessage)
    );
    this.newmessage = "";
  }
  showMessage(message: any) {
    this.greetings.push(message);
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