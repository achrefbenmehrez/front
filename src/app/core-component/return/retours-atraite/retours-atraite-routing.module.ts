import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetoursATraiteComponent } from './retours-atraite.component';

const routes: Routes = [{ path: '', component: RetoursATraiteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetoursATraiteRoutingModule { }
