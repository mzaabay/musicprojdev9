import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { MessageComponent } from './message/message.component';
import { PanierComponent } from './panier/panier.component';
import { PlaylistsComponent } from './playlists/playlists.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { component: ConnexionComponent, path: 'login' },
  { component: EvenementsComponent, path: 'evenements' },
  { component: BoutiqueComponent, path: 'boutique' },
  { component: PanierComponent, path: 'login/panier' },
  { component: MessageComponent, path: 'login/messages' },
  { component: PlaylistsComponent, path: 'playlists' },
  { component: UserComponent, path: 'user' },
  { component: HomeComponent, path: 'home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
