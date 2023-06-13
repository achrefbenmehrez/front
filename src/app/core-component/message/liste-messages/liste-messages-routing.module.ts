import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeMessagesComponent } from './liste-messages.component';

const routes: Routes = [{ path: '', component: ListeMessagesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeMessagesRoutingModule { }
