import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterMessageComponent } from './ajouter-message.component';

const routes: Routes = [{ path: '', component: AjouterMessageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterMessageRoutingModule { }
