import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  avatar: any;
  user: any;
  mediaUrl: any;

  constructor(private route: Router, public service: UtilityService, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8289/user/" + this.service.getId()).subscribe({
      next: (data) => {
        this.user = data;

        if (this.user.avatar != null) {
          this.mediaUrl = window.atob(this.user.avatar);

        }
        else {
          this.mediaUrl = "/assets/images/avatar.png"

        }
      }
    })

  }



  isCurrentPage(page: string) {
    return this.route.url === '/' + page;
  }

  // pour la barre de recherche -->
  searchText: any;

}

