import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationComponent } from './reclamation.component';

const routes: Routes = [{ path: '', component: ReclamationComponent }, { path: 'mes-reclamations', loadChildren: () => import('./mes-reclamations/mes-reclamations.module').then(m => m.MesReclamationsModule) }, { path: 'create-reclamation', loadChildren: () => import('./create-reclamation/create-reclamation.module').then(m => m.CreateReclamationModule) }, { path: 'reclamations-traités', loadChildren: () => import('./reclamations-traites/reclamations-traites.module').then(m => m.ReclamationsTraitesModule) }, { path: 'reclamations-non-traités', loadChildren: () => import('./reclamations-non-traite/reclamations-non-traite.module').then(m => m.ReclamationsNonTraiteModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
