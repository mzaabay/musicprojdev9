import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { EvenementsComponent } from './evenements/evenements.component';
import { MessageComponent } from './message/message.component';
import { PanierComponent } from './panier/panier.component';

const routes: Routes = [
  { component: ConnexionComponent, path: 'login' },
  { component: EvenementsComponent, path: 'evenements' },
  { component: BoutiqueComponent, path: 'boutique' },
  { component: PanierComponent, path: 'login/panier' },
  { component: MessageComponent, path: 'login/messages' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
