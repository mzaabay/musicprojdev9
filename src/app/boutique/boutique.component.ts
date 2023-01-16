import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  @ViewChild('quantity') public quantity: any
  @ViewChild('prix') public prix: any


  products: any;
  constructor(private http: HttpClient) { }


  ngOnInit(): void {

    this.http.get('http://localhost:8289/produits/all').subscribe({
      next: (data) => { this.products = data },
      error: (err) => { console.log(err) }

    });

  }

  produit: any;


  ajoutProduit() {
    this.http.put('http://localhost:8289/panier/999', {
      "id": 999,
      "quantite": this.quantity.nativeElement.value,
      "commandes": {
        "id": 3
      },
      "produits": {
        "id": 17
      }
    }).subscribe({
      next: (data) => {
        this.produit = data;


      },
      error: (err) => { console.log(err) }



    });


  }
}
