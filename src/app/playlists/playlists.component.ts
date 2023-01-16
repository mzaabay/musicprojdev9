import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  playlist: any;
  nbMorceau: any;
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8289/playlist').subscribe({
      next: (data) => { this.playlist = data },
      error: (err) => { console.log(err) },

    });

  }
}
