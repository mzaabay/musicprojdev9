import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  @ViewChild('quantity') public quantity: any
  panier: any;
  billeterie: any
  produit: any
  msg: any
  id: any;
  commande: any;
  constructor(private http: HttpClient, private route: Router, public service: UtilityService) { }

  
  ngOnInit(): void {
    this.http.get('http://localhost:8289/panier/user/'+ this.service.getId()).subscribe({
      next: (data) => { this.panier = data },
      error: (err) => { console.log(err) }
    });

    this.http.get('http://localhost:8289/billeterie/user/' + this.service.getId()).subscribe({
      next: (data) => { this.billeterie = data },
      error: (err) => { console.log(err) }
    });
  }


  coutPanier(): any {
    let total = 0;
    for (let i = 0; i < this.panier.length; i++) {
      total += this.panier[i].produits.prix * this.panier[i].quantite;
    }
    return total


  }

  coutEvenement(): any {
    let total = 0;
    for (let i = 0; i < this.billeterie.length; i++) {
      total += this.billeterie[i].evenement.prix * this.billeterie[i].quantite;
    }
    return total


  }


  suppressionProduitDuPanier(id_produit: any) {
    this.http.delete('http://localhost:8289/panier/delete/' + id_produit, {}
    ).subscribe({
      next: (data) => {
        this.produit = data;
        this.msg = "Produit supprimé"
        this.ngOnInit();



      },
      error: (err) => { console.log(err) }
    });
  }

  suppressionEvenementDuPanier(id_evenement: any) {
    this.http.delete('http://localhost:8289/billeterie/delete/' + id_evenement, {}
    ).subscribe({
      next: (data) => {
        this.billeterie = data;
        this.msg = "Évènement supprimé"
        this.ngOnInit();



      },
      error: (err) => { console.log(err) }
    });



  }



  modifQuantiteProduit(id_produit: any, quantite: any) {
    if (this.service.isConnected()) {                                                     //Vérifie si on est bien connecté
      this.http.get('http://localhost:8289/panier/produit/' + id_produit + '/' + this.service.getId()).subscribe({
        next: (data) => {
          this.id = Object.values(data).map(item => item.id).pop()
          this.http.put('http://localhost:8289/panier/' + this.id, {
            "id": this.id,
            "quantite": quantite,
            "produits": {
              "id": id_produit
            },
            "user": {
              "id": this.service.getId()
            }
          }).subscribe({
            next: (data) => {
              this.produit = data;
              this.msg = "Quantité modifiée"
              this.ngOnInit();
            },
            error: (err) => { console.log(err) }
          });
        },
        error: (err) => { console.log(err) }
      });
    }
    else {
      this.msg = 'veuillez vous connecter';
    }



    localStorage.removeItem('id')

  }

  modifQuantiteEvenement(id_evenement: any, quantite: any) {
    if (this.service.isConnected()) {                                                     //Vérifie si on est bien connecté
      this.http.get('http://localhost:8289/billeterie/evenement/' + id_evenement + '/' + this.service.getId()).subscribe({
        next: (data) => {
          this.id = Object.values(data).map(item => item.id).pop()
          this.http.put('http://localhost:8289/billeterie/' + this.id, {
            "id": this.id,
            "quantite": quantite,
            "evenement": {
              "id": id_evenement
            },
            "user": {
              "id": this.service.getId()
            }
          }).subscribe({
            next: (data) => {
              this.billeterie = data;
              this.msg = "Quantité modifiée"
              this.ngOnInit();
            },
            error: (err) => { console.log(err) }
          });
        },
        error: (err) => { console.log(err) }
      });
    }
    else {
      this.msg = 'veuillez vous connecter';
    }



    localStorage.removeItem('id')

  }


  creationCommande(prenom: any, nom: any, adresse_livraison: any) {
    this.http.put('http://localhost:8289/commande/999', {
              "id": 999,
							"adresse_livraison": adresse_livraison,
              "nom": nom,
              "prenom": prenom,
              "user": {
                "id": 1 }
    }).subscribe({
      next: (data) => {
        this.commande = data;
        this.msg = 'Commande validée';
      },
      error: (err) => { console.log(err) }
    });
  }













}
