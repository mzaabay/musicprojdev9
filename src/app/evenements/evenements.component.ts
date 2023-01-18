import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css'],
})
export class EvenementsComponent implements OnInit {
  events: any;
  constructor(private http: HttpClient, public service: UtilityService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8289/evenement/all').subscribe({
      next: (data) => { this.events = data },
      error: (err) => { console.log(err) }

    });

  }


  evenement: any;
  msg: any;
  id: any;

  ajoutEvenementABilleterie(id_evenement: any) {
    if (this.service.isConnected()) {
      this.http.get('http://localhost:8289/billeterie/evenement/' + id_evenement).subscribe({
        next: (data) => {
          if (Object.values(data).map(item => item.id).pop() != undefined) {
            this.id = Object.values(data).map(item => item.id).pop()
            console.log(this.id);
            localStorage.setItem('id', this.id);
            console.log(localStorage.getItem('id'));
            console.log('le ID_evenement du evenement cliqué existe, donc il est déja dans la billeterie normalement')
            this.msg = "L'événement est déjà dans la billeterie"
          }
          else {
            this.http.put('http://localhost:8289/billeterie/999', {
              "id": 999,
              "quantite": 1,
              "commandes": {
                "id": 3
              },
              "evenements": {
                "id": id_evenement
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


}









