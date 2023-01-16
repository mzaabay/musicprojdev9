import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  panier: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8289/panier').subscribe({
      next: (data) => { this.panier = data },
      error: (err) => { console.log(err) }
    });

  }

  stock: any;






}
