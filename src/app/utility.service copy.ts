import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  user: any;
  darkMode: boolean = false;
  icon: string = "fas fa-moon";
  darkvalue: string = "light";
  oppositeDarkValue: string = "dark";
  backgroundColor: string = "#b6946d33";
  pageColor: string = "#ffffff";
  color: any = "#528E5D";
  constructor(private route: Router) { }

  isConnected() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    if (this.user != null) {
      return true;
    } else {
      return false;
    }
  }

  deco() {
    sessionStorage.clear();
    this.route.navigateByUrl('login');
  }

  getLogin() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    return (this.user.login);
  }
  getPrenom() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    return (this.user.prenom);
  }
  getNom() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    return (this.user.nom);
  }

  getMail() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    return (this.user.mail);
  }
  getcode_postale() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    return (this.user.code_Postale);
  }
  getAdresse() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    return (this.user.adresse);
  }

  getId() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    return (this.user.id);
  }

  getPassword() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    return (this.user.password);
  }

  getAvatar() {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    return (this.user.avatar);
  }

  setAvatar(img: any) {
    let u: any = sessionStorage.getItem('userConnected');
    this.user = JSON.parse(u);
    this.user.avatar = img;
  }

  goToPanier() {
    this.route.navigate(['/login/panier']);
  }

  goToBoutique() {
    this.route.navigate(['/boutique'])
  }

  goToHome() {
    this.route.navigate(['/home'])
  }

  goToPlaylist() {
    this.route.navigate(['/playlists'])
  }

  goToEvenements() {
    this.route.navigate(['/evenements'])
  }

  setDarkMode() {
    this.darkMode = !this.darkMode;

    if (this.darkMode == true) {
      this.icon = "fas fa-sun"
      this.darkvalue = "dark"
      this.oppositeDarkValue = "light"
      this.backgroundColor = "#161616e7"


    }
    if (this.darkMode == false) {
      this.icon = "fas fa-moon"
      this.darkvalue = "light"
      this.oppositeDarkValue = "dark"
      this.backgroundColor = "#b6946d33"
    }

  }



}
