import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationsNonTraiteComponent } from './reclamations-non-traite.component';

const routes: Routes = [{ path: '', component: ReclamationsNonTraiteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationsNonTraiteRoutingModule { }
