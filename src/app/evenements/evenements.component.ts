import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {
  events: any;
  research: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8289/evenement/all').subscribe({
      next: (data) => { this.events = data },
      error: (err) => { console.log(err) }

    });

  }

  searchText: any;


}









