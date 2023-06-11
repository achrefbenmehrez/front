import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeDetailsComponent } from './commande-details.component';

const routes: Routes = [{ path: '', component: CommandeDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeDetailsRoutingModule { }
