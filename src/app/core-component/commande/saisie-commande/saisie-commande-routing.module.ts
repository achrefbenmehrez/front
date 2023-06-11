import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaisieCommandeComponent } from './saisie-commande.component';

const routes: Routes = [{ path: '', component: SaisieCommandeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaisieCommandeRoutingModule { }
