import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  ngOnInit(): void {

  }

  user: any;
  msg: any;

  constructor(private http: HttpClient, private route: Router) { }

  connexion(value: any) {
    this.http.post('http://localhost:8289/login', value).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data); /////
        if (this.user != null) {
          sessionStorage.setItem('userConnected', JSON.stringify(this.user));
          console.log(sessionStorage.getItem('userConnected')); /////
          this.route.navigateByUrl('home');
        } else {
          this.msg = 'Identifiant ou Mot de passe incorrect';
        }
      },
      error: (err) => { console.log(err) }
    });
  }

} 
