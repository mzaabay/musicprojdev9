import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../utility.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css'],
})
export class EvenementsComponent implements OnInit {
  @ViewChild('quantity') public quantity: any
  @ViewChild('prix') public prix: any


  clickedIndex: any;
  events: any;
  constructor(private http: HttpClient, public service: UtilityService, private route: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8289/evenement/all').subscribe({
      next: (data) => { this.events = data },
      error: (err) => { console.log(err) }

    });

  }


  evenement: any;
  msg: any;
  id: any;

  ajoutEvenementABilleterie(id_evenement: any, quantite: any) {
    if (this.service.isConnected()) {
      this.http.get('http://localhost:8289/billeterie/evenement/' + id_evenement + '/' + this.service.getId()).subscribe({
        next: (data) => {
          if (Object.values(data).map(item => item.id).pop() != undefined) {
            this.id = Object.values(data).map(item => item.id).pop()
            console.log(this.id);
            localStorage.setItem('id', this.id);
            console.log(localStorage.getItem('id'));
            console.log('le ID_evenement du evenement cliqué existe, donc il est déja dans la billeterie normalement')
            this.http.put('http://localhost:8289/billeterie/' + localStorage.getItem('id'), {
              "id": localStorage.getItem('id'),
              "quantite": quantite,
              "evenement": {
                "id": id_evenement
              },
              "user": {
                "id": this.service.getId()
              }

            }).subscribe({
              next: (data) => {
                this.evenement = data;
                this.msg = 'L\'évenement est déjà dans la billeterie, quantité modifiée';
              },
              error: (err) => { console.log(err) }
            });
          }
          else {
            this.http.put('http://localhost:8289/billeterie/999', {
              "id": 999,
              "quantite": quantite,
              "evenement": {
                "id": id_evenement
              },
              "user": {
                "id": this.service.getId()
              }
            }).subscribe({
              next: (data) => {
                this.evenement = data;
                this.msg = 'Événement ajouté à la billeterie';
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
  searchText: any;


  RedirectToPageEvenement(id_evenement: any) {
    this.http.get('http://localhost:8289/evenement/' + id_evenement).subscribe({
      next: (data) => {
        this.events = data
        this.id = Object.values(data).map(item => item.id).pop()
        console.log(this.id);
        localStorage.setItem('id', this.id);
        console.log(localStorage.getItem('id'));

        this.route.navigateByUrl('/evenements/page');
      },
      error: (err) => { console.log(err) }

    });


    localStorage.removeItem('id')
  }

}









