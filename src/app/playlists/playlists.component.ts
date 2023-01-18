import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  @ViewChild('morceau') public morceau: any

  playlist: any;
  nbMorceau: any;
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {

    this.http.get('http://localhost:8289/playlist').subscribe({
      next: (data) => { this.playlist = data },
      error: (err) => { console.log(err) },
    });
    setTimeout(() => { this.ngOnInit() }, 1000 * 1)
  }

  produit: any;
  msg: any;
  commande: any;

  ajoutMorceau(morceau: any) {
    this.http.put('http://localhost:8289/playlist/add/999', {
      "id": "999",
      "user": {
        "id": "1"
      },
      "morceau": {
        "id": morceau
      }
    }).subscribe({
      next: (data) => {
        this.produit = data;
        this.msg = 'Morceau ajouté';
      },
      error: (err) => { console.log(err) }
    });
  }
  supprimeMorceau(id_playlist: any) {
    this.http.delete('http://localhost:8289/playlist/delete/' + id_playlist, {}
    ).subscribe({
      next: (data) => {
        this.produit = data;
        this.msg = 'Morceau supprimé';
      },
      error: (err) => { console.log(err) }
    });
  }
}
