import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateReclamationComponent } from './create-reclamation.component';

const routes: Routes = [{ path: '', component: CreateReclamationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateReclamationRoutingModule { }
