import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationsTraitesComponent } from './reclamations-traites.component';

const routes: Routes = [{ path: '', component: ReclamationsTraitesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationsTraitesRoutingModule { }
