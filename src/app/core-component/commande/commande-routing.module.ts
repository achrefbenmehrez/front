import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';

const routes: Routes = [{ path: '', component: CommandeComponent }, { path: 'liste-commandes', loadChildren: () => import('./liste-commandes/liste-commandes.module').then(m => m.ListeCommandesModule) }, { path: 'import-commande', loadChildren: () => import('../product/importproduct/importproduct.module').then(m => m.ImportproductModule) }, { path: 'mes-commandes', loadChildren: () => import('./mes-commandes/mes-commandes.module').then(m => m.MesCommandesModule) }, { path: 'commandes-non-traitees', loadChildren: () => import('./commandes-non-traites/commandes-non-traites.module').then(m => m.CommandesNonTraitesModule) }, { path: 'saisie-commande', loadChildren: () => import('./saisie-commande/saisie-commande.module').then(m => m.SaisieCommandeModule) }, { path: 'commande-details/:id', loadChildren: () => import('./commande-details/commande-details.module').then(m => m.CommandeDetailsModule) }, { path: 'mes-livraisons', loadChildren: () => import('./mes-livraisons/mes-livraisons.module').then(m => m.MesLivraisonsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
