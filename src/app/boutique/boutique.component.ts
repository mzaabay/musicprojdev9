import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../utility.service';


@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
  @ViewChild('quantity') public quantity: any
  @ViewChild('prix') public prix: any


  products: any;
  constructor(private http: HttpClient, public service: UtilityService) { }


  ngOnInit(): void {

    this.http.get('http://localhost:8289/produits/all').subscribe({
      next: (data) => { this.products = data },
      error: (err) => { console.log(err) }

    });

  }

  produit: any;
  msg: any;
  id: any;
  test: any;
  m: any;
  filteredData: any;












  ajoutProduitAuPanier(id_produit: any, quantite: any) {
    if (this.service.isConnected()) {
      this.http.get('http://localhost:8289/panier/produit/' + id_produit).subscribe({
        next: (data) => {
          if (Object.values(data).map(item => item.id).pop() != undefined) {
            this.id = Object.values(data).map(item => item.id).pop()
            console.log(this.id);
            localStorage.setItem('id', this.id);
            console.log(localStorage.getItem('id'));
            console.log('le ID_poduit du produit cliqué existe, donc il est déja dans le panier normalement')
            this.http.put('http://localhost:8289/panier/' + localStorage.getItem('id'), {
              "id": localStorage.getItem('id'),
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
                this.msg = 'Le produit est déjà dans le panier, quantité modifiée';
              },
              error: (err) => { console.log(err) }
            });
          }
          else {
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
        },
        error: (err) => { console.log(err) }
      });











    }
    else {
      this.msg = 'veuillez vous connecter';
    }



    localStorage.removeItem('id')
  }



  suppressionProduitDuPanier(id_produit: any) {

  }


}
