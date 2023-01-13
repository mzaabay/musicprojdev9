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

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ConnexionComponent,
    EvenementsComponent,
    BoutiqueComponent,
    PlaylistsComponent,
    PanierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
