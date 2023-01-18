import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  message: any;
  imagePath: any;
  mediaUrl: any;
  user: any;
  constructor(public service: UtilityService, private http: HttpClient, private route: Router) { }
  ngOnInit(): void {

    this.http.get("http://localhost:8289/user/" + this.service.getId()).subscribe({
      next: (data) => {

        if (this.service.getAvatar() != null) {
          this.mediaUrl = data;
        }
        else {
          this.mediaUrl = "/assets/images/avatar.png"

        }
      }
    })

  }

  onFileChanged(event: any) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.mediaUrl = reader.result;
      console.log(this.mediaUrl)
      this.http.patch('http://localhost:8289/user/' + this.service.getId(),
        {
          "login": this.service.getLogin(),
          "password": this.service.getPassword(),
          "nom": this.service.getNom(),
          "prenom": this.service.getPrenom(),
          "mail": this.service.getMail(),
          "adresse": this.service.getAdresse(),
          "code_Postale": this.service.getcode_postale(),
          "avatar": this.mediaUrl
        }
      ).subscribe()

    }

  }



  update(value: any) {
    console.log(value)
    this.http.patch('http://localhost:8289/user/' + this.service.getId(), value).subscribe({
      next: (data) => {
        this.user = data;
        if (this.user != null) {
          this.message = "Changements pris en compte";
        }
        else {
          this.message = "Erreur dans l'update";
        }
      }
    })
  }

  deleteUser() {
    console.log(this.service.getId());

    this.http.delete('http://localhost:8289/user/delete/' + this.service.getId()).subscribe({});
    this.service.deco();
    this.route.navigateByUrl('home');
  }


}
