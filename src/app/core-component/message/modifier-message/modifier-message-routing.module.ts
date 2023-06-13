import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifierMessageComponent } from './modifier-message.component';

const routes: Routes = [{ path: ':id', component: ModifierMessageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModifierMessageRoutingModule { }
