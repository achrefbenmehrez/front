import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationComponent } from './reclamation.component';

const routes: Routes = [{ path: '', component: ReclamationComponent }, { path: 'mes-reclamations', loadChildren: () => import('./mes-reclamations/mes-reclamations.module').then(m => m.MesReclamationsModule) }, { path: 'create-reclamation', loadChildren: () => import('./create-reclamation/create-reclamation.module').then(m => m.CreateReclamationModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
