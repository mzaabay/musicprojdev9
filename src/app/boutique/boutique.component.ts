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
  msg: any;
  commande: any;








  ajoutProduitAuPanier(id_produit: any, quantite: any) {
    this.http.put('http://localhost:8289/panier/999', {
      "id": 999,
      "quantite": quantite,
      "commandes": {
        "id": 3
      },
      "produits": {
        "id": id_produit
      }


    }).subscribe({
      next: (data) => {
        this.produit = data;
        this.msg = 'Produit ajouté au panier';




      },
      error: (err) => { console.log(err) }





    });


  }

  onQuantityChange(event: any) {
    console.log(event.target.value);
  }
}
