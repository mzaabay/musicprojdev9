import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  products: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8289/produits/all').subscribe({
      next: (data) => { this.products = data },
      error: (err) => { console.log(err) }

    });

  }
}
