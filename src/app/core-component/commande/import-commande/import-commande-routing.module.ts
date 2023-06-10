import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImportCommandeComponent } from './import-commande.component';

const routes: Routes = [{ path: '', component: ImportCommandeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportCommandeRoutingModule { }
