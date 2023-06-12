import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetoursTraitesComponent } from './retours-traites.component';

const routes: Routes = [{ path: '', component: RetoursTraitesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetoursTraitesRoutingModule { }
