import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  cout(): any {
    let total = 0;
    for (let i = 0; i < this.panier.length; i++) {
      total += this.panier[i].produits.prix * this.panier[i].quantite;
    }
    return total


  }








}
