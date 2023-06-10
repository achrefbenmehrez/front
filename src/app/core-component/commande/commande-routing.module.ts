import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';

const routes: Routes = [{ path: '', component: CommandeComponent }, { path: 'liste-commandes', loadChildren: () => import('./liste-commandes/liste-commandes.module').then(m => m.ListeCommandesModule) }, { path: 'import-commande', loadChildren: () => import('./import-commande/import-commande.module').then(m => m.ImportCommandeModule) }, { path: 'mes-commandes', loadChildren: () => import('./mes-commandes/mes-commandes.module').then(m => m.MesCommandesModule) }, { path: 'commandes-non-traitees', loadChildren: () => import('./commandes-non-traites/commandes-non-traites.module').then(m => m.CommandesNonTraitesModule) }, { path: 'saisie-commande', loadChildren: () => import('./saisie-commande/saisie-commande.module').then(m => m.SaisieCommandeModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
