import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-page-evenements',
  templateUrl: './page-evenements.component.html',
  styleUrls: ['./page-evenements.component.css']
})
export class PageEvenementsComponent {

  constructor(private http: HttpClient, public service: UtilityService) { }

  event: any;


  RedirectToPageEvenement(id_evenement: any) {
    this.http.get('http://localhost:8289/evenement/' + id_evenement).subscribe({
      next: (data) => { this.event = data },
      error: (err) => { console.log(err) }

    });

  }


}
