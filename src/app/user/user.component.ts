import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  message: any;
  imagePath: any;
  url: any;
  user: any;


  constructor(public service: UtilityService, private http: HttpClient, private route: Router) { }


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
      this.url = reader.result;
    }

  }



  update(value: any) {
    console.log(value)
    this.http.patch('http://localhost:8289/user/', value).subscribe({
      next: (data) => {
        this.user = data;
        console.log(data)
        if (this.user != null) {
          this.route.navigateByUrl('home');
        }
        else {
        }
      }
    })
  }


}
