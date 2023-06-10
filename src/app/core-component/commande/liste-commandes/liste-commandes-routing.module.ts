import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeCommandesComponent } from './liste-commandes.component';

const routes: Routes = [{ path: '', component: ListeCommandesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeCommandesRoutingModule { }
