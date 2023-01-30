import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  chat: any;
  conv1: any;
  conv2: any;


  constructor(public service: UtilityService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8289/messages/user/' + this.service.getId()).subscribe({
      next: (data) => { this.chat = data; console.log(this.chat) },
      error: (err) => { console.log(err) }
    });
    this.http.get('http://localhost:8289/messages/user/' + this.service.getId() + '/2').subscribe({
      next: (data) => { this.conv1 = data; console.log(this.conv1) },
      error: (err) => { console.log(err) }
    });

    this.http.get('http://localhost:8289/messages/user/2/' + this.service.getId()).subscribe({
      next: (data) => { this.conv2 = data; console.log(this.conv2) },
      error: (err) => { console.log(err) }
    });
  }





} 