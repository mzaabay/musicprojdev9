import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { PanierComponent } from './panier/panier.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
