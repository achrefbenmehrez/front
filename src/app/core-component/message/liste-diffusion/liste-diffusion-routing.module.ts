import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeDiffusionComponent } from './liste-diffusion.component';

const routes: Routes = [{ path: ':id', component: ListeDiffusionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeDiffusionRoutingModule { }
