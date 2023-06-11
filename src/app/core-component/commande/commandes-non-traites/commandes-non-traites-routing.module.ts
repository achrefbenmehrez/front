import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesNonTraitesComponent } from './commandes-non-traites.component';

const routes: Routes = [{ path: '', component: CommandesNonTraitesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandesNonTraitesRoutingModule { }
