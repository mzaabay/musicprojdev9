import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EvenementsComponent } from './evenements/evenements.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PanierComponent } from './panier/panier.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfilComponent } from './profil/profil.component';
import { MdpComponent } from './mdp/mdp.component';
import { PageEvenementsComponent } from './page-evenements/page-evenements.component';



@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ConnexionComponent,
    EvenementsComponent,
    BoutiqueComponent,
    PlaylistsComponent,
    PanierComponent,
    UserComponent,
    HomeComponent,
    RegisterComponent,
    ProfilComponent,
    MdpComponent,
    PageEvenementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: HomeComponent },
    ])
    ,
    Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
