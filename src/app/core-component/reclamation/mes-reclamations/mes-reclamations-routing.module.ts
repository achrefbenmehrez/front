import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesReclamationsComponent } from './mes-reclamations.component';

const routes: Routes = [{ path: '', component: MesReclamationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesReclamationsRoutingModule { }
