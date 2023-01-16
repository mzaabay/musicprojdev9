import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private route: Router) { }

  ngOnInit(): void {

  }



  isConnected() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    if (this.user != null) {
      return true;
    } else {
      return false;
    }
  }

  deco() {
    sessionStorage.clear();
    this.route.navigateByUrl('login');
  }

  getName() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    return (this.user.login);


  }

}
