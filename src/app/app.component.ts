import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from './utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private route: Router, public service: UtilityService) { }

  ngOnInit(): void {
    this.service.getAvatar()

  }

  isCurrentPage(page: string) {
    return this.route.url === '/' + page;
  }

  // pour la barre de recherche -->
  searchText: any;

}

