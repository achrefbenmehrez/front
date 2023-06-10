import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesCommandesComponent } from './mes-commandes.component';

const routes: Routes = [{ path: '', component: MesCommandesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesCommandesRoutingModule { }
