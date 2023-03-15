import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';
import { trigger } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('listItem', [

    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private route: Router, public service: UtilityService) { }
  ngOnInit(): void {
    this.service.isConnected;
  }

}
