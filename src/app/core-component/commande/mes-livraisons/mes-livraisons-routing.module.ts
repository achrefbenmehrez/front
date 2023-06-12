import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesLivraisonsComponent } from './mes-livraisons.component';

const routes: Routes = [{ path: '', component: MesLivraisonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesLivraisonsRoutingModule { }
