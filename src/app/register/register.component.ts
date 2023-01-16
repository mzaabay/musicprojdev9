import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any;

  ngOnInit(): void {

  }

  constructor(private http: HttpClient, private route: Router) { }

  register(value: any) {
    console.log(value)
    this.http.post('http://localhost:8289/user', value).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data)
        if (this.user != null) {
          this.route.navigateByUrl('login');
        }
        else {


        }
      }
    })
  }

}
