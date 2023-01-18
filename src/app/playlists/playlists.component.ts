import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {
  morceau: any;
  playlist: any;

  @ViewChild('audioPlayer', { static: true }) audioPlayer: any;
  audioUrl = 'assets/audio/Rick Roll.mp3';

  constructor(private http: HttpClient, private route: Router, public service: UtilityService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8289/playlist').subscribe({
      next: (data) => { this.playlist = data },
      error: (err) => { console.log(err) },
    });
    this.http.get('http://localhost:8289/morceau').subscribe({
      next: (data) => { this.morceau = data },
      error: (err) => { console.log(err) },
    });
  }

  playAudio() {
    this.audioPlayer.nativeElement.play();
  }

  pauseAudio() {
    this.audioPlayer.nativeElement.pause();
  }

  onAudioEnded() {
    console.log('Audio ended');
  }


  produit: any;
  msg: any;
  commande: any;

  ajoutMorceau(morceau: any) {
    this.http.put('http://localhost:8289/playlist/add/99999', {
      "id": "99999",
      "user": {
        "id": this.service.getId()
      },
      "morceau": {
        "id": morceau
      }
    }).subscribe({
      next: (data) => {
        this.produit = data;
        this.msg = 'Morceau ajouté';
        this.ngOnInit();
      },
      error: (err) => { console.log(err) }
    });
  }
  supprimeMorceau(id_playlist: any) {
    this.http.delete('http://localhost:8289/playlist/delete/' + id_playlist
    ).subscribe({
      next: (data) => {
        this.produit = data;
        this.msg = 'Morceau supprimé';
        this.ngOnInit();
      },
      error: (err) => { console.log(err) }
    });
  }
}
